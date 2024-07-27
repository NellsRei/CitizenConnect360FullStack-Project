import { Router } from "express";
import { addPost, deletePost, getallposts, getPost, getPostsByUser } from "../Controllers/postController";
import { verifyAdminToken, verifyToken } from "../Middleware";


const postRouter = Router()
postRouter.post("",verifyToken,addPost)
postRouter.get("",verifyToken, getallposts)
postRouter.get("/:id",verifyAdminToken, getPost)
postRouter.delete("/:id", verifyToken, deletePost)
postRouter.get("/user/:id",verifyAdminToken, getPostsByUser)


export default postRouter