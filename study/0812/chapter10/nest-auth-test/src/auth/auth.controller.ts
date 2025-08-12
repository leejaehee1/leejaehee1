import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { email, password } = req.body as { email: string; password: string };
    const userInfo = await this.authService.validateUser(email, password);

    try {
      if (userInfo) {
        res.cookie('login', JSON.stringify(userInfo), {
          httpOnly: true,
          secure: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        res.send('Login successful');
      }
    } catch (error) {
      console.log(error);
      res.send('Login failed');
    }
  }
}
