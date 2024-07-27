import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import Bycrypt from "bcrypt"
import { RegisterSchema } from "../Helper";
import { DbHelper } from "../DatabaseHelper";
import { Payload, User } from "../Models/userModel";
import jwt from "jsonwebtoken"

const dbInstance = new DbHelper()

const adminEmail =[
    'dovejane028@gmail.com'
]
//function that assigns a role to users based on email
export function assignRoleBasedOnEmail(email: string): string {
    if (adminEmail.includes(email)) {
      return 'admin'
    }
    return 'user'
}
//function that registers a new user
export async function registerUser(req:Request, res:Response){
    try {
        const userid = uid()
        const {username, email,password} = req.body
        // console.log(userid,username,Email,Password);
        
        const {error} = RegisterSchema.validate(req.body)
        if(error){
            return res.status(400).json(error.details[0].message)
        }
        // Automatically assign role based on email
        const role = assignRoleBasedOnEmail(email)

        // Hashes the password
        const hashedPassword = await Bycrypt.hash(password,10)
        // console.log(hashedPassword,role)
        dbInstance.exec('addUser',{userid,username,email,hashedPassword,role})
        res.status(200).json({Message: "User Added Successfully"})
    } catch (error) {
        res.status(500).json(error)    
    }
}
//function to log in a registered user
export const loginUser = async (req:Request, res:Response)=>{
    try {
        const {email,password}=req.body
        const result = await dbInstance.exec('loginUser', {email})
        const user = result.recordset as User[]
        // console.log(user)
        //to prevent deleted users from accessing the website
        if(user[0].isDeleted === 1){
            return res.status(404).json({Message:"User doesn't exist.Sign in"})
        }
        //for users with an account
        if(user.length > 0){
            //compares the passwords
            const isValid = await Bycrypt.compare(password, user[0].password)
            
                if(isValid){
                    const payload:Payload ={
                        Sub: user[0].userid,
                        Name: user[0].username,
                        role: user[0].role
                    }
                    // console.log(payload)
                    const token = jwt.sign(payload,
                        process.env.SECRET as string,
                        {expiresIn:'2h'}
                    )
                    console.log(user[0].userid)
                    return res.status(201).json({Message:"Login Successfull!!!",token, role:user[0].role, id:user[0].userid, username:user[0].username})
                }
                return res.status(400).json({Message:"Incorrect Credentials!!!"})
                            }
        // console.log("Here")
    } catch (error) {
        return res.status(500).json(error)
    }
}