import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotification } from 'src/notifications/types';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateNotification) {
    if (data.userId === data.senderId) return;

    return this.prisma.notification.create({
      data,
    });
  }
}
