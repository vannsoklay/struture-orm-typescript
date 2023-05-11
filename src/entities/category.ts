import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { Post } from "./post"

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @ManyToMany(() => Post, (post) => post.categories)
  posts: Post[]
}
