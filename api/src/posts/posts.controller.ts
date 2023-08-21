import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/config';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { Post as PostType, User } from '@prisma/client';
import { CreatePostDto } from 'src/posts/dto';
import { LikesService } from 'src/likes/likes.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private likesService: LikesService,
  ) {}

  @Get()
  @UseGuards(JwtGuard)
  async findAll(@GetUser() user: User): Promise<PostType[]> {
    const posts = await this.postsService.findAll();

    return await Promise.all(
      posts.map(async (post) => {
        const isLiked = !!(await this.likesService.findOne({
          postId: post.id,
          userId: user.id,
        }));
        return { ...post, isLiked };
      }),
    );
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async findOne(
    @Param() { id }: { id: string },
    @GetUser() user: User,
  ): Promise<PostType & { isLiked: boolean }> {
    const post = await this.postsService.findOne(+id);
    const isLiked = !!(await this.likesService.findOne({
      postId: post.id,
      userId: user.id,
    }));

    return { ...post, isLiked };
  }

  @Post()
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('image', multerOptions))
  create(
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User,
    @Body() createPostDto: CreatePostDto,
    @Headers() headers,
  ): Promise<PostType> {
    return this.postsService.create({
      userId: user.id,
      content: createPostDto.content,
      image: `http://${headers.host}/${file.filename}`,
    });
  }
}
