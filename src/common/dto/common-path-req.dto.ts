import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CommonPathReqDto {
  /** id */
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  id: string;
}
