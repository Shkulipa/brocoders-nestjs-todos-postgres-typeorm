import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import Password from 'src/common/decorators/password.decorator';
import Trim from 'src/common/decorators/trim.decorator';
import { IdDbDto } from 'src/common/dto/id-db.dto';

export class UsersDbDto extends IdDbDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  @Trim()
  email: string;

  @ApiProperty({ required: true, type: String })
  @Password({ description: 'password' })
  password: string;
}
