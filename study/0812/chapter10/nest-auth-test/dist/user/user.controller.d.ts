import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: CreateUserDto): Promise<import("./user.entity").User>;
    getUser(email: string): Promise<import("./user.entity").User | null>;
    updateUser(email: string, user: UpdateUserDto): Promise<void>;
    deleteUser(email: string): Promise<import("typeorm").DeleteResult>;
}
