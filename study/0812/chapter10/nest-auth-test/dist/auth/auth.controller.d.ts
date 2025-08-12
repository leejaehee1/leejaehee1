import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(userDto: CreateUserDto): Promise<import("../user/user.entity").User>;
    login(req: Request, res: Response): Promise<void>;
}
