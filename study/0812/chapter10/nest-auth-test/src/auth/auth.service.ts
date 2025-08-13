import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(userDto: CreateUserDto) {
    const existingUser = await this.userService.getUser(userDto.email);
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    try {
      const encryptedPassword = bcrypt.hashSync(userDto.password, 10);

      const user = await this.userService.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException('Failed to create user', 500);
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUser(email);
    if (!user) {
      return null;
    }
    const { password: hashedPassword, ...userInfo } = user;
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordValid) {
      return null;
    }
    return userInfo;
  }
}
