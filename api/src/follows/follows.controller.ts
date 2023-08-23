import { Controller } from '@nestjs/common';
import { FollowsService } from 'src/follows/follows.service';

@Controller('follows')
export class FollowsController {
  constructor(private followsService: FollowsService) {}
}
