import { Payload } from "../Models/userModel"
import { NextFunction, Request, Response} from "express";
import jws from "jsonwebtoken" 


export interface ExtendedRequest extends Request{
    info? :Payload
}

export function verifyToken(req:ExtendedRequest, res:Response,next:NextFunction){
    try {
        //read token
        const token = req.headers['token'] as string

        //check token
        if(!token){
            return res.status(401).json({Message:"You don't have the authorization to access this service"})
        }
        const decodeData = jws.verify(token, process.env.SECRET as string) as Payload

        // //checking if user is admin or not
        // if(decodeData.role !== 'admin'){
        //     return res.status(401).json({message:"Not an Admin"}) 
        // }
        req.info = decodeData
        next()
    } catch (error) {
        if (error === 'TokenExpiredError') {
            res.status(401).json({ Message: 'Token expired' });
        } else if (error === 'JsonWebTokenError') {
            res.status(401).json({ Message: 'Invalid token' });
        } else {
            res.status(500).json({ Message: 'Internal server error', error });
        }
    }
    
}
//for verifying if admin priviledges
export function verifyAdminToken(req:ExtendedRequest, res:Response,next:NextFunction){
    try {
        //read token
        const token = req.headers['token'] as string

        //check token
        if(!token){
            return res.status(401).json({Message:"You don't have the authorization to access this service"})
        }
        const decodeData = jws.verify(token, process.env.SECRET as string) as Payload

        //checking if user is admin or not
        if(decodeData.role !== 'admin'){
            return res.status(401).json({Message:"Not an Admin"}) 
        }
        req.info = decodeData
        next()
    } catch (error) {
        if (error === 'TokenExpiredError') {
            res.status(401).json({ Message: 'Token expired' });
        } else if (error === 'JsonWebTokenError') {
            res.status(401).json({ Message: 'Invalid token' });
        } else {
            res.status(500).json({ Message: 'Internal server error', error });
        }
    }
    
}