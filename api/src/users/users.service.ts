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
    return this.prisma.user.findFirst({ where: { username } });
  }

  create(data: SignUpDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async findRandom(count: number, excludedUserId: number) {
    const totalUsers = await this.prisma.user.count();
    const randomIds = new Set<number>();

    while (randomIds.size < count) {
      const randomId = Math.floor(Math.random() * totalUsers) + 1;
      if (randomId !== excludedUserId) {
        randomIds.add(randomId);
      }
    }

    return this.prisma.user.findMany({
      where: {
        id: { in: Array.from(randomIds) },
      },
    });
  }
}
