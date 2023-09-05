import { IsNotEmpty, IsString } from 'class-validator';

export class EditUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  bio: string;
}
