import { DbHelper } from "../DatabaseHelper";
import { User } from "../Models/userModel";
import { Request, Response } from "express";
import { assignRoleBasedOnEmail } from "./authContoller";

const dbInstance = new DbHelper()

//for getting all users
export async function getallusers(req:Request, res:Response){
  try {
    const users = (await dbInstance.exec('getAllUsers',{})).recordset as User[]
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }  
}

//for getting a specific user
export async function getuser(req:Request<{id:string}>, res:Response){
    try {
      const user = (await dbInstance.exec('getUser',{userid: req.params.id})).recordset as User[]
      if(user.length > 0){
        res.status(200).json(user)
    }else{
       res.status(404).json({Message:"User Not Found"})
    }
    } catch (error) {
      res.status(500).json(error)
    }  
}
// for approving citizens 

export const approvingCitizen = async (req:Request, res:Response)=>{
  //push the userdetails to the pendingApproval table in the database
  try {
    const {email,password}=req.body
  } catch (error) {
    
  }
}

//Deleting A User
export async function deleteuser(req:Request<{id : string}> , res:Response){
  try {
      // Check if the user exists
      const userExists = await dbInstance.exec('checkUserExists', { userid: req.params.id })
      
      if (!userExists.recordset.length) {
          return res.status(404).json({ Message: "User not found" })
      }

      // Update isDeleted to 1
      await dbInstance.exec('updateUserIsDeleted', { userid: req.params.id })


      res.status(200).json({Message:"User Deleted Successfully!!!"})
  } catch (error) {
      res.status(500).json(error)
  }
}
