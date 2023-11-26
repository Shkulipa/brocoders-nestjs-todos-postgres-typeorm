import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TodoItemDto {
  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @MaxLength(128)
  @IsString()
  text: string;

  @ApiProperty({ required: true, type: Boolean })
  @IsBoolean()
  @IsNotEmpty()
  isDone: boolean;
}
