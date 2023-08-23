import { Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { FollowsService } from 'src/follows/follows.service';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { User } from '@prisma/client';

@Controller('follows')
export class FollowsController {
  constructor(private followsService: FollowsService) {}

  @Post(':followingId')
  @UseGuards(JwtGuard)
  create(
    @Param() { followingId }: { followingId: string },
    @GetUser() user: User,
  ) {
    return this.followsService.create({
      followingId: +followingId,
      followerId: user.id,
    });
  }

  @Delete(':followingId')
  @UseGuards(JwtGuard)
  delete(
    @Param() { followingId }: { followingId: string },
    @GetUser() user: User,
  ) {
    return this.followsService.create({
      followingId: +followingId,
      followerId: user.id,
    });
  }
}
