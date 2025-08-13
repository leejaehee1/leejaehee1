import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';
import { AuthGuard } from '@nestjs/passport';

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

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    await super.logIn(request);
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    console.log('request.isAuthenticated() : ', request.isAuthenticated());
    return request.isAuthenticated();
  }
}

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    await super.logIn(request);
    return result;
  }
}
