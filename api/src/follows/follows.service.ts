import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollow } from 'src/follows/types';

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

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
