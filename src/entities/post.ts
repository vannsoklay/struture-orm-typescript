import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { Category } from "./category"
import { Author } from "./author"

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  title?: string

  @Column()
  text?: string

  @ManyToOne((type) => Author, (post) => post.posts, {
    cascade: true,
  })
  author?: Author

  @ManyToMany(() => Category, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[]
}
