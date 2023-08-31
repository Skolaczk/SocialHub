import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsService } from 'src/posts/posts.service';
import { LikesModule } from 'src/likes/likes.module';

@Module({
  imports: [PrismaModule, LikesModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
