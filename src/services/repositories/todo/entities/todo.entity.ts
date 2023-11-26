import { AbstractEntity } from 'src/database/abstracts/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { TodoItemDto } from '../dto/todo-item.dto';

@Entity()
export class TodoEntity extends AbstractEntity<TodoEntity> {
  @Column({ type: 'varchar', length: 128, default: false })
  title: string;

  @Column({ type: 'jsonb', default: [] })
  todoItems: TodoItemDto[];

  @ManyToOne(() => UserEntity, (user) => user.todo)
  user: UserEntity;
}
