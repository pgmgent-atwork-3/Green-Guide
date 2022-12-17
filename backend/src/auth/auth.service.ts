import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUserName(userName);
    console.log('user:', user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const currentUser = await this.usersService.findOneByUserName(user.userName);
    console.log('currentUser:', currentUser);
    const payload = { userName: currentUser.userName, sub: currentUser.id, role: currentUser.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}