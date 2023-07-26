import { Controller, Get, UseGuards } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';
import { JwtGuard } from 'src/common/guards';
import { GetUser } from 'src/common/decorators';
import { Notification, User } from '@prisma/client';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @UseGuards(JwtGuard)
  @Get()
  findAll(@GetUser() user: User): Promise<Notification[]> {
    return this.notificationsService.findAll(+user.id);
  }
}
