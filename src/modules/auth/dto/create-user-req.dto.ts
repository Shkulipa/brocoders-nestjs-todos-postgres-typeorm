import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class CreateUserReqDto extends PickType(UsersDbDto, [
  'email',
  'password',
]) {}
