import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, UsersModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
})
export class AuthModule {}
