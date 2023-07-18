import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

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
  @Get('random')
  findRandom(@GetUser() user: User, @Query('count') count: string) {
    return this.usersService.findRandom(+count, user.id);
  }
}
