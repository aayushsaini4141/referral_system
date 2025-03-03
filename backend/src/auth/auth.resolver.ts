import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { TokenResponse } from './auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => TokenResponse) // Return the token as a string
  async generatetoken(@Args('token') token: string): Promise<TokenResponse> {
    return this.authService.token(token);
  }
}
