import { NextFunction, Request, Response } from "express"

export const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log("hello", req.headers["authorization"])
  return next()
}
