import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  create(postId: number, userId: number) {
    return this.prisma.like.create({ data: { postId, userId } });
  }

  async delete(postId: number, userId: number) {
    const like = await this.prisma.like.findFirst({
      where: { postId, userId },
    });

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
