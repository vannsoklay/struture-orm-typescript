import { connection } from "@config/db"
import { Category } from "@entities/category"

const categoryRep = connection.getRepository(Category)
export const add = async (name: string) => {
  try {
    let category = new Category()
    category.name = name
    await categoryRep.save(category)
    return category
  } catch (e: any) {
    throw Error(e.message)
  }
}


export const find_all = async () => {
    let categories = await categoryRep.find({})
    return categories
  }
  