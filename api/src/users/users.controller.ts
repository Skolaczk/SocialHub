import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { FollowsService } from 'src/follows/follows.service';
import { UserWithStatus } from 'src/users/types';
import { EditUserDto } from 'src/users/dto/edit-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/config';
import { getImageUrl } from 'src/common/helpers';

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

  @UseGuards(JwtGuard)
  @Get()
  findRandom(@GetUser() user: User): Promise<User[]> {
    return this.usersService.findRandom(user.id);
  }

  @Patch()
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('image', multerOptions))
  edit(
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User,
    @Body() editUserDto: EditUserDto,
  ) {
    return this.usersService.edit(user.id, {
      ...editUserDto,
      image: getImageUrl(file?.filename),
    });
  }

  @Get(':username')
  @UseGuards(JwtGuard)
  async findOneByUsername(
    @Param() { username }: { username: string },
    @GetUser() currentUser: User,
  ): Promise<UserWithStatus> {
    const user = await this.usersService.findOneByUsernameWithPosts(username);

    const isFollowing = !!(await this.followsService.findOne({
      followerId: user.id,
      followingId: currentUser.id,
    }));

    const isCurrentUserProfile = user.username === currentUser.username;

    return { ...user, isFollowing, isCurrentUserProfile };
  }
}
