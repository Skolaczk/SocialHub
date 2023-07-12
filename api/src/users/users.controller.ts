import { Controller, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  findAllByUsername(@Query('username') username: string): Promise<User[]> {
    return this.usersService.findAllByUsername(username);
  }
}
