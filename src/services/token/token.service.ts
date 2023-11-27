import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify, TokenExpiredError } from 'jsonwebtoken';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { UserTokenDataDto } from 'src/common/dto/user-token-data.dto';

@Injectable()
export class TokenService {
  constructor(private readonly configService: ConfigService) {}

  verifyAccessToken(token: string) {
    try {
      const SECRET_ACCESS = this.configService.get<string>(
        EEnvVariables.SECRET_ACCESS,
      );
      const decoded = verify(token, SECRET_ACCESS);
      return decoded;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        // Token has expired
        throw new UnauthorizedException(
          'Your Session has expired, please login again',
        );
      }

      throw new UnauthorizedException(err.message);
    }
  }

  createAccessToken(tokenData: UserTokenDataDto): string {
    const SECRET_ACCESS = this.configService.get<string>(
      EEnvVariables.SECRET_ACCESS,
    );

    return sign(tokenData, SECRET_ACCESS, { expiresIn: '1d' });
  }
}
