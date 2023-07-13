import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (!user) throw new UnauthorizedException('Credentials incorrect');

    const isMatch = await bcrypt.compare(signInDto.password, user.password);

    if (!isMatch) throw new UnauthorizedException('Credentials incorrect');

    return user;
  }

  async signUp(signUpDto: SignUpDto) {
    const isEmailExists = await this.usersService.findOneByEmail(
      signUpDto.email,
    );
    const isUsernameExists = await this.usersService.findOneByUsername(
      signUpDto.username,
    );

    if (isEmailExists || isUsernameExists) {
      throw new ForbiddenException('Credentials taken');
    }

    const hashPassword = await bcrypt.hash(signUpDto.password, 10);

    return this.usersService.create({
      email: signUpDto.email,
      username: signUpDto.username,
      password: hashPassword,
    });
  }
}
