import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
interface RequestWithUser extends Request {
    user?: CreateUserDto;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(userDto: CreateUserDto): Promise<import("../user/user.entity").User>;
    login(req: Request, res: Response): Promise<void>;
    login2(req: RequestWithUser, res: Response): Response<any, Record<string, any>>;
    testGuard(): string;
    login3(req: RequestWithUser): any;
    testGuardWithSession(req: RequestWithUser): any;
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: RequestWithUser, res: Response): Response<any, Record<string, any>>;
}
export {};
