import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  webUrl: string;

  constructor(webUrl: string) {
    super();
    this.webUrl = webUrl;
  }
}
