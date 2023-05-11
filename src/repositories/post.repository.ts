import { Post } from "@entities/post"
import { connection } from "@config/db"
import { Author } from "@entities/author"
import { Category } from "@entities/category"

const postRep = connection.getRepository(Post)

interface Categor {
  id: number;
}
export const add = async (
  categories: Category,
  title: string,
  text: string,
  author: Author,
) => {
  const category1 = new Category()
  category1.name = "animals"

  const category2 = new Category()
  category2.name = "zoo"

  // let i: Category[] = []

  // const categor: Category = {
  //   id: 1,
  // };
  
  const post = new Post()
  post.title = title
  post.text = text
  post.author = author
  // post.categories = [categor]

  return await postRep.manager.save(post)
}

const get_all = async () => {
  return await postRep
    .createQueryBuilder("p")
    .leftJoinAndSelect("p.author", "author")
    .leftJoinAndSelect("p.categories", "category")
    .getMany()
}

const get = async ({ id }: any) => {
  const post = await postRep.findOneBy({
    id: id,
  })
  return post
}

export { get_all, get }
