import { Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { LikesService } from 'src/likes/likes.service';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { User } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post(':postId')
  @UseGuards(JwtGuard)
  create(@Param('postId') postId: string, @GetUser() user: User) {
    return this.likesService.create(+postId, user.id);
  }

  @Delete(':postId')
  @UseGuards(JwtGuard)
  delete(@Param('postId') postId: string, @GetUser() user: User) {
    return this.likesService.delete(+postId, user.id);
  }
}
