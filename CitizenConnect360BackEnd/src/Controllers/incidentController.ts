import {Request, Response} from "express"
import { DbHelper } from "../DatabaseHelper";
import { v4 as uid } from "uuid";
import { ExtendedRequest } from "../Middleware";
import { Incident } from "../Models/incidentModel";
import { incidentSchema } from "../Helper";

const dbInstance = new DbHelper()

//For adding an incident 
export async function addIncident(req:ExtendedRequest, res:Response){
    try {
        const incidentId = uid()
        const username = req.info?.Name
        const {multimedia,incidentDescription,incidentLocation} = req.body
        
        //for validation of adding incidents
        const {error} = incidentSchema.validate(req.body)
        if(error){
            return res.status(400).json(error.details[0].message)
        }

        if (!username) {
            return res.status(400).json({ message: "User ID is required" });
        }
        dbInstance.exec('addIncident',{incidentId, username, multimedia,incidentDescription, incidentLocation})
        res.status(200).json({Message:"Incident posted successfully"})
    } catch (error) {
        res.status(500).json(error)  
    }
}
//For getting all incidents
export async function getallIncidents(req:Request, res:Response){
    try {
        const incidents = (await dbInstance.exec('getAllIncidents',{})).recordset as Incident[]
        res.status(200).json(incidents)
    } catch (error) {
        res.status(500).json(error)
    }
}

//For a specific incident
export async function getIncident(req:Request<{id:string}>,res:Response){
    try {
     const incident = (await dbInstance.exec('getIncident',{incidentId:req.params.id})).recordset as Incident[]
     if(incident.length > 0){
         res.status(200).json(incident)
     }else{
        res.status(404).json({Message:"Incident Not Found"})
     }
    } catch (error) {
     res.status(500).json(error) 
    } 
 }
//For deleting incidents
export async function deleteIncident(req:Request<{id:string}>, res:Response){
    try {
        await dbInstance.exec('deleteIncident',{postId:req.params.id})
        res.status(200).json({Message:"Incident Deleted Successfully"})
    } catch (error) {
        res.status(500).json(error)
    }

}