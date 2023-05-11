import express, { Express, Request, Response, NextFunction } from "express"
import { createServer } from "http"
import * as bodyParser from "body-parser"
import cors from "cors"
import { connection } from "@config/db"
import { api } from "./routes"
import { port } from "@config/index"

export const server = async () => {
  const app: Express = express()
  connection
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!")

      app.use(express.json())
      app.use(bodyParser.json())
      app.use(
        cors({
          origin: ["http://localhost:3000"],
          credentials: true,
        }),
      )

      // api route
      app.use("/api", api)

      // unknow route
      app.all("*", (req: Request, res: Response, next: NextFunction) => {
        const err = new Error(`Route ${req.originalUrl} not found`) as any
        err.statusCode = 404
        next(err)
      })

      // global error handler
      app.use(
        (err: any, req: Request, res: Response, next: NextFunction): void => {
          err.status = err.status || "error"
          err.statusCode = err.statusCode || 500

          res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
          })
        },
      )

      const server = createServer(app)

      server.listen(port, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${port}`,
        )
      })
    })
    .catch((err: any) => {
      console.error("Error during Data Source initialization", err)
    })
}
