import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from 'src/auth/dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn(signInDto: SignInDto) {
    return signInDto;
  }

  signUp(signUpDto: SignUpDto) {
    return signUpDto;
  }
}
