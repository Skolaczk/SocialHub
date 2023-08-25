import { Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { FollowsService } from 'src/follows/follows.service';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { User } from '@prisma/client';

@Controller('follows')
export class FollowsController {
  constructor(private followsService: FollowsService) {}

  @Post(':followerId')
  @UseGuards(JwtGuard)
  create(
    @Param() { followerId }: { followerId: string },
    @GetUser() user: User,
  ) {
    return this.followsService.create({
      followingId: user.id,
      followerId: +followerId,
    });
  }

  @Delete(':followerId')
  @UseGuards(JwtGuard)
  delete(
    @Param() { followerId }: { followerId: string },
    @GetUser() user: User,
  ) {
    return this.followsService.delete({
      followingId: user.id,
      followerId: +followerId,
    });
  }
}
