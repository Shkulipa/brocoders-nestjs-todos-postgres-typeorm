import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { IdDbDto } from 'src/common/dto/id-db.dto';
import { TodoItemDto } from './todo-item.dto';
import { Type } from 'class-transformer';

export class TodoDbDto extends IdDbDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  title: string;

  @ApiProperty({
    required: true,
    type: [TodoItemDto],
  })
  @ValidateNested({ each: true })
  @Type(() => TodoItemDto)
  todoItems: TodoItemDto[];
}
