import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUser(email: string) {
    const result = await this.userRepository.findOne({ where: { email } });
    return result;
  }

  async updateUser(email: string, _user: UpdateUserDto) {
    const user = await this.getUser(email);
    user!.username = _user.username;
    user!.password = _user.password;
    console.log(user);
    this.userRepository.save(user!);
  }

  async deleteUser(email: string) {
    return this.userRepository.delete({ email });
  }
}
