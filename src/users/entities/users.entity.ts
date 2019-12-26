import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  username?: string;
  @Column()
  password?: string;
  @Column()
  salt?: string;
  @CreateDateColumn({ default: new Date() })
  createdAt?: Date;
  @UpdateDateColumn({ default: new Date() })
  updatedAt?: Date;
  constructor(username: string, password: string, salt: string) {
    super();
    this.username = username;
    this.password = password;
    this.salt = salt;
  }
}
