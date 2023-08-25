import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { FollowsService } from 'src/follows/follows.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private followsService: FollowsService,
  ) {}

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User): User {
    return user;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  findAllByUsername(@Query('username') username: string): Promise<User[]> {
    return this.usersService.findAllByUsername(username);
  }

  @Get()
  findRandom(): Promise<User[]> {
    return this.usersService.findRandom();
  }

  @Get(':username')
  @UseGuards(JwtGuard)
  async findOneByUsername(
    @Param() { username }: { username: string },
    @GetUser() currentUser: User,
  ): Promise<User & { isFollowing: boolean }> {
    const user = await this.usersService.findOneByUsernameWithPosts(username);

    const isFollowing = !!(await this.followsService.findOne({
      followerId: user.id,
      followingId: currentUser.id,
    }));

    return { ...user, isFollowing };
  }
}
