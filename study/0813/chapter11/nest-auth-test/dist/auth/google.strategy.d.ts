import { Profile, Strategy, StrategyOptionsWithRequest } from 'passport-google-oauth20';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
declare const GoogleStrategy_base: new (...args: [options: import("passport-google-oauth20").StrategyOptions] | [options: import("passport-google-oauth20").StrategyOptions] | [options: StrategyOptionsWithRequest] | [options: StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class GoogleStrategy extends GoogleStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(accessToken: string, refreshToken: string, profile: Profile): Promise<User>;
}
export {};
