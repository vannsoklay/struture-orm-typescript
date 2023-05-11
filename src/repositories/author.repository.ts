import { connection } from "@config/db"
import { Author } from "@entities/author"

const authorRep = connection.getRepository(Author)

export const add = async (name: string) => {
  let author = new Author()
  author.name = name
  await authorRep.save(author)
  return author
}

export const find = async ({ id }: any) => {
  let author = await authorRep.findOneBy({ id: id })
  return author
}

export const find_all = async () => {
  let author = await authorRep.find({})
  return author
}
