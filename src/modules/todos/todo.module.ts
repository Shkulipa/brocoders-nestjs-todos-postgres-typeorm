import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';
import { TodoRepositoryModule } from 'src/services/repositories/todo/todo-repository.module';
import { TokenModule } from 'src/services/token/token.module';

@Module({
  imports: [UserRepositoryModule, TodoRepositoryModule, TokenModule],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService],
})
export class TodoModule {}
