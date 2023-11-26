import Token from '../decorators/token.decorator';

export class AccessTokenDto {
  @Token()
  accessToken: string;
}
