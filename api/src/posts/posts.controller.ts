import { Controller, Get } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { Post } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }
}
