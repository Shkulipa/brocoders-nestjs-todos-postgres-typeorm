import { IntersectionType, PickType } from '@nestjs/swagger';
import { AccessTokenDto } from 'src/common/dto/access-token.dto';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class LoginUserResDto extends IntersectionType(
  PickType(UsersDbDto, ['id', 'email']),
  AccessTokenDto,
) {}
