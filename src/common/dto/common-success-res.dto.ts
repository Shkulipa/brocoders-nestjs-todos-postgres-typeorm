import { ApiProperty } from '@nestjs/swagger';

export class CommonSuccessResDto {
  @ApiProperty({ required: true, type: Boolean, description: 'success' })
  success: boolean;
}
