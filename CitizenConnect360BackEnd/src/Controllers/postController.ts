import {Request, Response} from "express"
import { DbHelper } from "../DatabaseHelper";
import { v4 as uid } from "uuid";
import { Post } from "../Models/postModel";
import { ExtendedRequest } from "../Middleware";
import { postSchema } from "../Helper";

const dbInstance = new DbHelper()

//For adding a post 
export async function addPost(req:ExtendedRequest, res:Response){
    try {
        const postId = uid()
        const userid = req.info?.Sub
        const username = req.info?.Name
        // console.log(req.info?.Name)
        const {postDescription} = req.body
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
 
 
        // Determine AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';
 
        // Convert hours from 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
 
        // Helper function to add leading zero if needed
        const addLeadingZero = (num: number): string => (num < 10 ? `0${num}` : String(num));
 
        const formattedDateTime = `${year}-${month}-${day} ${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${ampm}`;
        console.log(formattedDateTime)

        //for validation for adding a post
        const {error} = postSchema.validate(req.body)
        if(error){
            return res.status(400).json(error.details[0].message)
        }
        if (!username) {
            return res.status(400).json({ Message: "Token is required" })
        }else if (!userid) {
            return res.status(400).json({ Message: "Token is required" })
        }
        dbInstance.exec('addPost',{postId, username, postDescription, userid, formattedDateTime})
        res.status(200).json({Message:"Post added successfully"})
    } catch (error) {
        res.status(500).json(error)  
    }
}
//For getting all posts
export async function getallposts(req:Request, res:Response){
    try {
        const posts = (await dbInstance.exec('getAllPosts',{})).recordset as Post[]

        if(posts.length>0){
             return res.status(200).json(posts) 
        }

        return res.status(404).json({Message: 'No posts found'})
      
    } catch (error) {
        return res.status(500).json({Message:"Something went wrong"+error})
    }
}
//For getting all posts by a specific user
export async function getPostsByUser(req:Request<{id:string}>,res:Response){
   try {
    const userspost = (await dbInstance.exec('postsByUser',{userid:req.params.id})).recordset as Post[]
    if(userspost.length > 0){
        res.status(200).json(userspost)
    }else{
    res.status(404).json({Message:"No Posts Created By this User"})
    }
   } catch (error) {
    res.status(500).json(error) 
   } 
}
//For a specific post
export async function getPost(req:Request<{id:string}>,res:Response){
    try {
     const post = (await dbInstance.exec('getPost',{postId:req.params.id})).recordset as Post[]
     if(post.length > 0){
         res.status(200).json(post)
     }else{
        res.status(404).json({Message:"Post Not Found"})
     }
    } catch (error) {
     res.status(500).json(error) 
    } 
 }
//For deleting posts
export async function deletePost(req:Request<{id:string}>, res:Response){
    try {
        await dbInstance.exec('deletePost',{postId:req.params.id})
        res.status(200).json({Message:"Post Deleted Successfully"})
    } catch (error) {
        res.status(500).json(error)
    }

}