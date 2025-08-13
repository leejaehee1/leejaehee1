import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
