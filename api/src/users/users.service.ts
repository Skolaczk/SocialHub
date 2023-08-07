import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

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
    return this.prisma.user.findFirst({
      where: { username },
      include: {
        posts: true,
        _count: { select: { posts: true, followers: true, following: true } },
      },
    });
  }

  create(data: SignUpDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  findRandom(): Promise<User[]> {
    return this.prisma.user.findMany({ take: 5 });
  }
}
