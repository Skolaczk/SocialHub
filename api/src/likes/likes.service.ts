import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLike } from 'src/likes/types';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  findOne({ postId, userId }: CreateLike) {
    return this.prisma.like.findFirst({
      where: { postId, userId },
    });
  }

  async create(data: CreateLike) {
    const like = await this.findOne(data);

    if (like) {
      throw new ConflictException('Like already exists');
    }

    return this.prisma.like.create({ data });
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
