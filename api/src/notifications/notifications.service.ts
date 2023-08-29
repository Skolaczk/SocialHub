import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotifacation } from 'src/notifications/types';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateNotifacation) {
    return this.prisma.notification.create({
      data,
    });
  }
}
