import { PassportSerializer } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UserService);
    serializeUser(user: User, done: (err: any, user: any) => void): void;
    deserializeUser(payload: any, done: (err: any, user: any) => void): Promise<void>;
}
