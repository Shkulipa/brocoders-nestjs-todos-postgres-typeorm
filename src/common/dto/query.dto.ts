import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, Max, Min } from 'class-validator';

export class QueryDto {
  @ApiProperty({ type: Number })
  @IsDefined()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @Type(() => Number)
  @Min(1)
  @IsInt()
  page: number;
}
