import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { UserEntity } from '../user/entities/user.entity';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, TodoEntity])],
  providers: [TodoRepository],
  exports: [TodoRepository],
})
export class TodoRepositoryModule {}
