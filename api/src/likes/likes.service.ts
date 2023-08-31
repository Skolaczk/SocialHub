import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLike } from 'src/likes/types';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class LikesService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
    private postsService: PostsService,
  ) {}

  findOne({ postId, userId }: CreateLike) {
    return this.prisma.like.findFirst({
      where: { postId, userId },
    });
  }

  async create(data: CreateLike) {
    const isLikeExists = await this.findOne(data);

    if (isLikeExists) {
      throw new ConflictException('Like already exists');
    }

    const like = await this.prisma.like.create({ data });
    const { userId } = await this.postsService.findOne(like.postId);

    await this.notificationsService.create({
      type: 'like',
      senderId: like.userId,
      userId: userId,
      postId: like.postId,
    });
  }

  async delete(data: CreateLike) {
    const like = await this.findOne(data);

    if (!like) {
      throw new NotFoundException('Like not found');
    }

    return this.prisma.like.delete({
      where: {
        id: like.id,
      },
    });
  }
}
