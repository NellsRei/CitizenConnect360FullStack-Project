import { Router } from "express";
import { addPoll, deletePoll, getAllPolls, getPoll, getPollsByUser } from "../Controllers/pollController";
import { verifyAdminToken, verifyToken } from "../Middleware";


const pollRouter = Router()
pollRouter.post("", verifyToken, addPoll)
pollRouter.get("",verifyToken, getAllPolls)
pollRouter.get("/:id",verifyAdminToken, getPoll)
pollRouter.get("/user/:id",verifyAdminToken, getPollsByUser)
pollRouter.delete("/:id", verifyAdminToken, deletePoll)


export default pollRouter
