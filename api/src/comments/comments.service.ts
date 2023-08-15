import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comment } from '@prisma/client';
import { CreateComment } from 'src/comments/types';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateComment): Promise<Comment> {
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
