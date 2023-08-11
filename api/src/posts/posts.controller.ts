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

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostType[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: { id: string }): Promise<PostType> {
    return this.postsService.findOne(+id);
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
