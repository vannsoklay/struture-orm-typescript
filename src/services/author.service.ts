import { NextFunction, Request, Response } from "express"
import { add, find, find_all } from "@repositories/author.repository"

export const add_author = async (req: Request, res: Response) => {
  const { name } = req.body
  console.log("body", req.body);
  
  try {
    const author = await add(name)
    return res.status(201).json({
      status: 201,
      author: author,
    })
  } catch (e: any) {
    throw Error(e)
  }
}


export const find_all_author = async (
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
  