import { ApiProperty } from '@nestjs/swagger';

export class CommonServerErrorResDto {
  @ApiProperty({
    required: true,
    type: Number,
    description: 'statusCode',
  })
  statusCode: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'message',
  })
  message: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'error',
  })
  error: string;
}
