import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
  Get,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import {
  AuthenticatedGuard,
  LocalAuthGuard,
  LoginGuard,
  GoogleAuthGuard,
} from './auth.guard';

interface RequestWithUser extends Request {
  user?: CreateUserDto;
}

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

  @UseGuards(LoginGuard)
  @Get('login2')
  login2(@Req() req: RequestWithUser, @Res() res: Response) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }
    return res.send({ message: 'Login2 successful' });
  }

  @UseGuards(LoginGuard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보입니다.';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Req() req: RequestWithUser): any {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Req() req: RequestWithUser): any {
    return req.user;
  }

  @Get('to-google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req: RequestWithUser, @Res() res: Response) {
    const { user } = req;
    return res.send(user);
  }
}
