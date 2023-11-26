import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { UserEntity } from 'src/services/repositories/user/entities/user.entity';

/**
 * @User param decorator from the request;
 */
export const User = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    const user: UserEntity = ctx.switchToHttp().getRequest().user;
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  },
);
