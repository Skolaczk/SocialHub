import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client';
import { CreatePost } from 'src/posts/types';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        user: {
          select: {
            username: true,
            image: true,
          },
        },
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
    });
  }

  findOne(id: number): Promise<Post> {
    return this.prisma.post.findFirst({
      where: { id },
      include: {
        user: {
          select: {
            username: true,
            image: true,
          },
        },
        comments: {
          include: {
            user: {
              select: {
                username: true,
                image: true,
              },
            },
          },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
    });
  }

  create(data: CreatePost): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
}
