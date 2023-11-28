import { Injectable, NotFoundException } from '@nestjs/common';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { CreateTodoReqDto } from './dto/create-todo-req.dto';
import { UserEntity } from 'src/services/repositories/user/entities/user.entity';
import { QueryGetTodoReqDto } from './dto/get-todo-req.dto';
import { TodoRepository } from 'src/services/repositories/todo/todo.repository';
import { GetTodosResDto } from 'src/modules/todos/dto/get-todos-res.dto';
import { UpdateTodoReqDto } from './dto/update-todo-req.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodo(id: string, user: UserEntity) {
    const todo = await this.todoRepository.findOne({
      where: {
        user,
        id,
      },
    });
    if (!todo) throw new NotFoundException(`Todo(${id}) wasn't found`);
    return todo;
  }

  async get(
    user: UserEntity,
    query: QueryGetTodoReqDto,
  ): Promise<GetTodosResDto> {
    const [todos, count] = await this.todoRepository.getTodos(user, query);
    const res = {
      todos,
      count,
    };

    return res;
  }

  async create(
    user: UserEntity,
    createTodoReqDto: CreateTodoReqDto,
  ): Promise<CommonSuccessResDto> {
    await this.todoRepository.createTodo(user, createTodoReqDto);
    return { success: true };
  }

  async update(
    id: string,
    user: UserEntity,
    updateTodoReqDto: UpdateTodoReqDto,
  ): Promise<CommonSuccessResDto> {
    await this.getTodo(id, user);
    await this.todoRepository.updateTodo(id, user, updateTodoReqDto);
    return { success: true };
  }

  async delete(user: UserEntity, id: string): Promise<CommonSuccessResDto> {
    await this.getTodo(id, user);
    await this.todoRepository.deleteTodo(id);

    return { success: true };
  }
}
