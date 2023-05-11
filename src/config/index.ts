import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT as string
const name_db = process.env.NAME_DB as string
const db_name = process.env.DB_NAME as string
const pass_db = process.env.PASS_DB as string
const port_db = process.env.PORT_DB as string
const adrs_db = process.env.ADDRESS_DB as string

export { port, db_name, name_db, port_db, pass_db, adrs_db }
