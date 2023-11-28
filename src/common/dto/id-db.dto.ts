import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class IdDbDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  id: string;
}
