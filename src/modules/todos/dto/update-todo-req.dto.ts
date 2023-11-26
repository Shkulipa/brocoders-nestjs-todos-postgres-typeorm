import { PickType } from '@nestjs/swagger';
import { TodoDbDto } from 'src/services/repositories/todo/dto/todo-db.dto';

export class UpdateTodoReqDto extends PickType(TodoDbDto, [
  'title',
  'todoItems',
]) {}
