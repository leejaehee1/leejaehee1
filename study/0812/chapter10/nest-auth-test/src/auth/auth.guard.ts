import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';

interface RequestWithUser extends Request {
  user?: UpdateUserDto;
}

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    if (request.cookies['login']) {
      return true;
    }

    const body = request.body as CreateUserDto;
    if (!body || !body.email || !body.password) {
      return false;
    }

    const user = await this.authService.validateUser(body.email, body.password);

    if (!user) {
      return false;
    }

    request.user = {
      ...user,
      password: body.password,
    };
    return true;
  }
}
