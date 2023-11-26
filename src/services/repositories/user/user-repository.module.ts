import { Module } from '@nestjs/common';

import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from '../todo/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, TodoEntity])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
