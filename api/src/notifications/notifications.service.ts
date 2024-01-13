import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotification } from 'src/notifications/types';
import { Notification } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  findAll(userId: number): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: { userId },
      include: { sender: true },
    });
  }

  create(data: CreateNotification) {
    if (data.userId === data.senderId) return;

    return this.prisma.notification.create({
      data,
    });
  }
}
