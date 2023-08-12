import { Controller, Get } from '@nestjs/common';
import { CommentsService } from 'src/comments/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  hello() {
    return { content: 'hello comments' };
  }
}
