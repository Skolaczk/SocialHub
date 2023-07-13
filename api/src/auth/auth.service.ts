import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from 'src/auth/dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  signIn(signInDto: SignInDto) {
    return this.usersService.findOneByEmail(signInDto.email);
  }

  async signUp({ email, username, password }: SignUpDto) {
    const isEmailExists = await this.usersService.findOneByEmail(email);
    const isUsernameExists = await this.usersService.findOneByUsername(
      username,
    );

    if (isEmailExists || isUsernameExists) {
      throw new ForbiddenException('Credentials taken');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    return this.usersService.create({
      email: email,
      username: username,
      password: hashPassword,
    });
  }
}
