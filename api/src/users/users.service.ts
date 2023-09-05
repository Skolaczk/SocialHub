import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findOneById(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        notifications: {
          include: {
            sender: { select: { id: true, username: true, image: true } },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }

  findAllByUsername(username: string): Promise<User[]> {
    if (!username) return;

    return this.prisma.user.findMany({
      where: {
        username: {
          contains: username,
          mode: 'insensitive',
        },
      },
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  findOneByUsername(username: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { username } });
  }

  async findOneByUsernameWithPosts(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { username },
      include: {
        posts: true,
        _count: { select: { posts: true, followers: true, following: true } },
      },
    });

    if (!user) throw new NotFoundException('User not found');

    delete user.password;
    return user;
  }

  create(data: SignUpDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  findRandom(): Promise<User[]> {
    return this.prisma.user.findMany({ take: 5 });
  }

  edit(id, data): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }
}
