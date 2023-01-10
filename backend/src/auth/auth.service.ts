import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
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

  async login(user: any, @Res({ passthrough: true }) response: Response) {
    const currentUser = await this.usersService.findOneByUserName(
      user.userName,
    );
    console.log('currentUser:', currentUser);
    const payload = {
      userName: currentUser.userName,
      sub: currentUser.id,
      role: currentUser.role,
    };

    const token = this.jwtService.sign(payload);

    response.cookie('accessToken', token, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      sameSite: 'strict',
      httpOnly: true,
    });
    return {
      access_token: token,
    };
  }
}
