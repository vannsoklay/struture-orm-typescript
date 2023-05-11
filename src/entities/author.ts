
 

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Post } from './post'

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string

    @OneToMany((type) => Post, (post) => post.author)
    public posts?: Post[]
}