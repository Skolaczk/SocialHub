import { forwardRef, Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [NotificationsModule, forwardRef(() => PostsModule)],
  controllers: [LikesController],
  providers: [LikesService],
  exports: [LikesService],
})
export class LikesModule {}
