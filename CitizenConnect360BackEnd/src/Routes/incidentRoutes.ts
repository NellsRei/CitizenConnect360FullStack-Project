import { Router } from "express";
import { verifyAdminToken, verifyToken } from "../Middleware";
import { addIncident, deleteIncident, getallIncidents, getIncident } from "../Controllers/incidentController";



const IncidentRouter = Router()
IncidentRouter.post("", verifyToken, addIncident)
IncidentRouter.get("",verifyToken, getallIncidents)
IncidentRouter.get("/:id", verifyAdminToken, getIncident)
IncidentRouter.delete("", verifyAdminToken, deleteIncident)

export default IncidentRouter
