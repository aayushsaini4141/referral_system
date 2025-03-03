import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenResponse } from './auth.dto';

@Injectable()
export class AuthService {
  private readonly SECRET_KEY = process.env.JWT_SECRET || 'fallback-secret';
  constructor(private jwtService: JwtService) {}

  async token(token: string): Promise<TokenResponse> {
    if (token !== this.SECRET_KEY) {
      throw new UnauthorizedException('Invalid secret token');
    }

    const payload = { token };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }}
