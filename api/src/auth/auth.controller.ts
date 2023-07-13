import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { SignInDto, SignUpDto } from 'src/auth/dto';
import { AccessToken } from 'src/auth/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: SignInDto): Promise<AccessToken> {
    return this.authService.signIn(signInDto);
  }

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto): Promise<AccessToken> {
    return this.authService.signUp(signUpDto);
  }
}
