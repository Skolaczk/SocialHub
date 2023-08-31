import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comment } from '@prisma/client';
import { CreateComment } from 'src/comments/types';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
    private postsService: PostsService,
  ) {}

  async create(data: CreateComment): Promise<Comment> {
    const { userId } = await this.postsService.findOne(data.postId);

    await this.notificationsService.create({
      type: 'comment',
      senderId: data.userId,
      userId: userId,
      postId: data.postId,
    });

    return this.prisma.comment.create({
      data,
      include: {
        user: {
          select: {
            username: true,
            image: true,
          },
        },
      },
    });
  }
}
