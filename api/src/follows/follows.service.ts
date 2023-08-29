import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollow } from 'src/follows/types';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class FollowsService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationsService,
  ) {}

  findOne({ followingId, followerId }: CreateFollow) {
    return this.prisma.follow.findFirst({
      where: { followingId, followerId },
    });
  }

  async create(data: CreateFollow) {
    const follow = await this.findOne(data);

    if (follow) {
      throw new ConflictException('This user already followed');
    }

    await this.notificationService.create({
      type: 'follow',
      senderId: data.followingId,
      userId: data.followerId,
    });

    return this.prisma.follow.create({ data });
  }

  async delete(data: CreateFollow) {
    const follow = await this.findOne(data);

    if (!follow) {
      throw new NotFoundException('Follow not found');
    }

    return this.prisma.follow.delete({
      where: {
        id: follow.id,
      },
    });
  }
}
