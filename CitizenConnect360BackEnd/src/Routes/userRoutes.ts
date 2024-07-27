import { Router } from "express";
import { verifyAdminToken} from "../Middleware";
import { deleteuser, getallusers, getuser } from "../Controllers/userController";


const userRouter = Router()
userRouter.get("",verifyAdminToken,getallusers)
userRouter.get("/:id",verifyAdminToken,getuser)
userRouter.delete("/:id",verifyAdminToken,deleteuser)


export default userRouter