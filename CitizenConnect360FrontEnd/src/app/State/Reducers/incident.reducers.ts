import { createReducer, on } from "@ngrx/store"
import { state } from "@angular/animations"
import { Incident } from "../../Models/incidentModel"
import { IncidentActions } from "../Actions/incident.actions"


export interface IncidentInterface{
    addingAnIncidentSuccessMessage:string,  //for login success message
    addingAnIncidentErrorMessage:string,  //for login error messages
    addingAnIncidentLoading:boolean  ,  //shows that login is loading

    gettingAllIncidentsSuccessMessage:Incident[],
    gettingAllIncidentsErrorMessage:string, 
    gettingAllIncidentsLoading:boolean ,

    gettingAnIncidentSuccessMessage:Incident[],
    gettingAnIncidentErrorMessage:string, 
    gettingAnIncidentLoading:boolean,

    deletingAnIncidentSuccessMessage:string,
    deletingAnIncidentErrorMessage:string,
    deletingAnIncidentLoading:boolean
}


const initialState:IncidentInterface = {
    addingAnIncidentErrorMessage : '',
    addingAnIncidentLoading: false,
    addingAnIncidentSuccessMessage: '',

    gettingAllIncidentsErrorMessage:'',
    gettingAllIncidentsLoading: false,
    gettingAllIncidentsSuccessMessage: [],


    gettingAnIncidentErrorMessage:'',
    gettingAnIncidentLoading: false,
    gettingAnIncidentSuccessMessage: [],

    deletingAnIncidentErrorMessage:'',
    deletingAnIncidentLoading: false,
    deletingAnIncidentSuccessMessage: ''
}

export const incidentReducers = createReducer(
    initialState,
    //for adding a post
    on(IncidentActions.addingAnIncident , (state)=>{
        return{
            ...state,
            addingAnIncidentErrorMessage: '',
            addingAnIncidentSuccessMessage: '',   
            addingAnIncidentLoading:true
        }
    }),
    on(IncidentActions.addingAnIncidentSuccess , (state, action)=>{
        return{
            ...state,
            addingAnIncidentErrorMessage: '',
            addingAnIncidentSuccessMessage: action.response.Message,
            addingAnIncidentLoading:true
        }
    }),
    on(IncidentActions.addingAnIncidentFailure, (state,action)=>{
        return{
            ...state,
            addingAnIncidentErrorMessage: action.Message,
            addingAnIncidentSuccessMessage: '', 
            addingAnIncidentLoading:true
        }
    }),

    //for getting all post
    on(IncidentActions.gettingallincidents , (state)=>{
        return{
            ...state,
            gettingAllIncidentsErrorMessage: '',
            gettingAllIncidentsSuccessMessage: [],   
            gettingAllIncidentsLoading:true
        }
    }),
    //for getting all post success
    on(IncidentActions.gettingallincidentsSuccess , (state, action)=>{
        return{
            ...state,
            gettingAllIncidentsErrorMessage: '',
            gettingAllIncidentsSuccessMessage: action.Incidents,
            gettingAllIncidentsLoading:true
        }
    }),
    //for getting all post failure
    on(IncidentActions.gettingallincidentsFailure, (state,action)=>{
        return{
            ...state,
            gettingAllIncidentsErrorMessage: action.Message,
            gettingAllIncidentsSuccessMessage: [], 
            gettingAllIncidentsLoading:true
        }
    }),

    //for getting a specific post
    on(IncidentActions.gettingAnIncident , (state)=>{
        return{
            ...state,
            gettingAnIncidentErrorMessage: '',
            gettingAnIncidentSuccessMessage:[],   
            gettingAnIncidentLoading:true
        }
    }),
    //for getting a post success
    on(IncidentActions.gettingAnIncidentSuccess , (state, action)=>{
        return{
            ...state,
            gettingAnIncidentErrorMessage: '',
            gettingAnIncidentSuccessMessage: action.Incident,
            gettingAnIncidentLoading:true
        }
    }),
    //for getting a post failure
    on(IncidentActions.gettingAnIncidentFailure, (state,action)=>{
        return{
            ...state,
            gettingAnIncidentErrorMessage: action.Message,
            gettingAnIncidentSuccessMessage: [], 
            gettingAnIncidentLoading:true
        }
    }),

    //for deleting a specific post
    on(IncidentActions.deletingAnIncident, (state)=>{
        return{
            ...state,
            deletingAnIncidentErrorMessage: '',
            deletingAnIncidentSuccessMessage: '',   
            deletingAnIncidentLoading:true
        }
    }),
    //for deleting a post success
    on(IncidentActions.deletingAnIncidentSuccess , (state, action)=>{
        return{
            ...state,
            deletingAnIncidentErrorMessage: '',
            deletingAnIncidentSuccessMessage: action.response.Message,
            deletingAnIncidentLoading:true
        }
    }),
    //for deleting a post failure
    on(IncidentActions.deletingAnIncidentFailure , (state, action)=>{
        return{
            ...state,
            deletingAnIncidentErrorMessage: action.Message,
            deletingAnIncidentSuccessMessage:'', 
            deletingAnIncidentLoading:true
        }
    })
)