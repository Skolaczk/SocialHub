import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommentsService } from 'src/comments/comments.service';
import { CreateCommentDto } from 'src/comments/dto';
import { Comment, User } from '@prisma/client';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  findAll(@Query('postId') postId: string) {
    return this.commentsService.findAll(+postId);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(
    @GetUser() user: User,
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    return this.commentsService.create({
      userId: user.id,
      ...createCommentDto,
    });
  }
}
