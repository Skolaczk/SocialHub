import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    PostsModule,
    PrismaModule,
  ],
})
export class AppModule {}
