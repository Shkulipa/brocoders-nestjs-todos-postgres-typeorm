import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresConfig from './database/config/postgres.config';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './modules/todos/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(postgresConfig),
    ConfigModule.forRoot(),
    AuthModule,
    TodoModule,
  ],
})
export class AppModule {}
