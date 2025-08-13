import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Profile,
  Strategy,
  StrategyOptionsWithRequest,
} from 'passport-google-oauth20';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'profile'],
    } as StrategyOptionsWithRequest);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<User> {
    const { id, name, emails } = profile;
    console.log('accessToken : ' + accessToken);
    console.log('refreshToken : ' + refreshToken);
    console.log('profile : ', profile);

    const providerId = id;
    const email = emails?.[0]?.value;

    const user = await this.userService.findByEmailOrSave(
      email as string,
      (name?.familyName as string) + (name?.givenName as string),
      providerId,
    );

    return user;
  }
}
