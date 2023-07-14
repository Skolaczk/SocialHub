import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from 'src/auth/dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { AccessToken, JwtPayload } from 'src/auth/types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<AccessToken> {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (!user) throw new UnauthorizedException('Credentials incorrect');

    const isMatch = await bcrypt.compare(signInDto.password, user.password);

    if (!isMatch) throw new UnauthorizedException('Credentials incorrect');

    const { id, email, username } = user;

    return this.signToken({ sub: id, email, username });
  }

  async signUp(signUpDto: SignUpDto): Promise<AccessToken> {
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

    const user = await this.usersService.create({
      email: signUpDto.email,
      username: signUpDto.username,
      password: hashPassword,
    });

    const { id, email, username } = user;

    return this.signToken({ sub: id, email, username });
  }

  async signToken(payload: JwtPayload): Promise<AccessToken> {
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '365d',
        secret: this.config.get('TOKEN_SECRET'),
      }),
    };
  }
}
