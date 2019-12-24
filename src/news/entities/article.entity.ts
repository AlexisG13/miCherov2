import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  webUrl: string;

  constructor(id: number, webUrl: string) {
    this.id = id;
    this.webUrl = webUrl;
  }
}
