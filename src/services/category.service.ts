import { NextFunction, Request, Response } from "express"
import { add, find_all } from "@repositories/seed.repository"

export const add_category = async (req: Request, res: Response) => {
  const { name } = req.body
  console.log("body", req.body)

  try {
    const category = await add(name)
    return res.status(201).json({
      status: 201,
      author: category,
    })
  } catch (e: any) {
    throw Error(e)
  }
}

export const find_all_category = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await find_all()
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
