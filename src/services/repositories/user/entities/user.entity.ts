import { AbstractEntity } from 'src/database/abstracts/abstract.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { TodoEntity } from '../../todo/entities/todo.entity';

@Entity()
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column({ type: 'varchar', default: false, unique: true })
  email: string;

  @Column({ type: 'varchar', default: false })
  password: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user, { cascade: true })
  todo: TodoEntity[];
}
