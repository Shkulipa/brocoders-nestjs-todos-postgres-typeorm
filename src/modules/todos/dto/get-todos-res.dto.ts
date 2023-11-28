import { TodoEntity } from '../../../services/repositories/todo/entities/todo.entity';

export class GetTodosResDto {
  todos: TodoEntity[];
  count: number;
}
