import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAllByUsername(@Query('username') username: string): Promise<User[]> {
    return this.usersService.findAllByUsername(username);
  }
}
