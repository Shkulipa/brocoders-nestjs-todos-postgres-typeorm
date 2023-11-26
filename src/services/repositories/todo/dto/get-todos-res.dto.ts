import { TodoEntity } from '../entities/todo.entity';

export class GetTodosResDto {
  todos: TodoEntity[];
  count: number;
}
