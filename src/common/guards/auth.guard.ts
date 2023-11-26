import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import { ExpressRequestInterface } from 'src/common/interfaces/express-req.interfaces';
import { UserRepository } from 'src/services/repositories/user/user.repository';

import { TokenService } from 'src/services/token/token.service';
import { UserTokenDataDto } from '../dto/user-token-data.dto';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private readonly userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<ExpressRequestInterface>();
    const headerAuthorization = request.headers.authorization;
    console.log('token', request.headers)

    if (!headerAuthorization)
      throw new UnauthorizedException('User unauthorized, please login');

    const token = headerAuthorization.split(' ')[1];

    if (!token)
      throw new UnauthorizedException('User unauthorized, please login');

    try {
      const { email } = this.tokenService.verifyAccessToken(
        token,
      ) as UserTokenDataDto;
      const user = await this.userRepository.validateUser(email);

      request.user = user;

      return true;
    } catch (err) {
      throw err;
    }
  }
}
