import { NextFunction, Request, Response } from "express"
import { add, get, get_all } from "@repositories/post.repository"
import { Category } from "@entities/category"
import { Author } from "@entities/author"

type Post = {
  categories: Category
  title: string
  text: string
  author: Author
}
export const add_post = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let post: Post = req.body
    let data = await add(post.categories, post.title, post.text, post.author)
    res.status(201).json({
      status: "success",
      data: {
        post: data,
      },
    })
  } catch (e: any) {
    throw Error(e.message)
  }
}

export const get_post = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params

  try {
    let data = await get({ id })
    res.status(201).json({
      status: "success",
      data: {
        post: data,
      },
    })
  } catch (e: any) {
    throw Error(e.message)
  }
}

export const get_all_post = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await get_all()
    res.status(201).json({
      status: "success",
      data: {
        post: data,
      },
    })
  } catch (e: any) {
    throw Error(e.message)
  }
}
