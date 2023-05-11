import { DataSource } from "typeorm"

export const connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 6500,
  username: "postgres",
  password: "soklay123",
  database: "db",
  synchronize: true,
  logging: false,
  entities: ["./src/entities/*.ts"],
  subscribers: ["./src/subscriber/*.ts"],
})
