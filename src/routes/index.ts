import express from "express"
import { auth } from "@middleware/auth.mdw"

import { get_post, get_all_post, add_post } from "@services/post.service"
import { add_author, find_all_author } from "@services/author.service"
import { add_category, find_all_category } from "@services/category.service"

export const api = express.Router()

api.get("/posts", get_all_post)
api.get("/post/:id", get_post)
api.post("/add/post", add_post)

// author
api.post("/add/author", add_author)
api.get("/authors", find_all_author)

// category
api.post("/add/category", add_category)
api.get("/categories",auth, find_all_category)
