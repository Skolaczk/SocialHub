import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from 'src/auth/dto';
import { EditUserData } from 'src/users/types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findOneById(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id },
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

  async edit(id: number, data: EditUserData): Promise<User> {
    if (!data.image) delete data.image;

    const userToUpdate = await this.findOneById(id);

    if (data.username && data.username !== userToUpdate.username) {
      const existingUserWithUsername = await this.prisma.user.findFirst({
        where: {
          username: data.username,
          NOT: {
            id: id,
          },
        },
      });

      if (existingUserWithUsername) {
        throw new ConflictException('This username already exists');
      }
    }

    return this.prisma.user.update({ where: { id }, data });
  }
}
