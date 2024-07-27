import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Incident, incidentReq, incidentRes } from "../../Models/incidentModel";


export const IncidentActions = createActionGroup({
    source: "AUTH_API",
    events:{
        //for reporting an incident
        'addingAnIncident':props<{newIncident:incidentReq}>(),    //from the authentication service.....(what's being taken in)
        'addingAnIncident success':props<{response:incidentRes}>(), //the observable from authentication service
        'addingAnIncident failure':props<{Message:string}>(),  //for the json message

        //for getting all incidents
        'gettingallincidents':emptyProps(),
        'gettingallincidents success':props<{Incidents:Incident[]}>(),
        'gettingallincidents failure':props<{Message:string}>(),

        //for getting a specific incident
        'gettingAnIncident':props<{id: string}>(),
        'gettingAnIncident success':props<{Incident:Incident[]}>(),
        'gettingAnIncident failure':props<{Message:string}>(),

        //for deleting a specific incident
        'deletingAnIncident':props<{id: string}>(),
        'deletingAnIncident success':props<{response:incidentRes}>(),
        'deletingAnIncident failure':props<{Message:string}>()
    }
})