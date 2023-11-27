import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from 'src/database/base-repository/base-mongo.repository';
import { TodoEntity } from './entities/todo.entity';
import { UserEntity } from '../user/entities/user.entity';
import { CreateTodoReqDto } from 'src/modules/todos/dto/create-todo-req.dto';
import { QueryDto } from 'src/common/dto/query.dto';
import { UpdateTodoReqDto } from 'src/modules/todos/dto/update-todo-req.dto';

@Injectable()
export class TodoRepository extends BaseRepository<TodoEntity> {
  protected readonly logger = new Logger(TodoRepository.name);

  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {
    super(todoRepository);
  }

  async getTodos(user: UserEntity, queryDto: QueryDto) {
    const { page, limit } = queryDto;
    const skip = (page - 1) * limit;

    const res = await this.todoRepository.findAndCount({
      where: { user },
      take: limit,
      skip: skip,
    });

    return res;
  }

  async createTodo(user: UserEntity, createTodoReqDto: CreateTodoReqDto) {
    const newTodo = this.todoRepository.create({
      ...createTodoReqDto,
      user,
    });

    await this.todoRepository.save(newTodo);
  }

  async updateTodo(
    id: string,
    user: UserEntity,
    updateTodoReqDto: UpdateTodoReqDto,
  ) {
    return await this.todoRepository.update({ id, user }, updateTodoReqDto);
  }

  async deleteTodo(id: string) {
    return await this.todoRepository.delete(id);
  }
}
