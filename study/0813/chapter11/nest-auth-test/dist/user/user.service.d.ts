import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: CreateUserDto): Promise<User>;
    getUser(email: string): Promise<User | null>;
    updateUser(email: string, _user: UpdateUserDto): Promise<void>;
    deleteUser(email: string): Promise<import("typeorm").DeleteResult>;
    findByEmailOrSave(email: string, username: string, providerId: string): Promise<User>;
}
