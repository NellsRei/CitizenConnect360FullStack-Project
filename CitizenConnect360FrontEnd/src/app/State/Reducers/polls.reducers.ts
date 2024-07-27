import { createReducer, on } from "@ngrx/store"
import { state } from "@angular/animations"
import { FullPoll} from "../../Models/pollModel"
import { PollActions } from "../Actions/poll.actions"


export interface PollInterface{
    addingAPollSuccessMessage:string,  //for login success message
    addingAPollErrorMessage:string,  //for login error messages
    addingAPollLoading:boolean  ,  //shows that login is loading

    gettingAllPollsSuccessMessage:FullPoll[],
    gettingAllPollsErrorMessage:string, 
    gettingAllPollsLoading:boolean ,

    gettingPollByUserSuccessMessage:FullPoll[],
    gettingPollByUserErrorMessage:string, 
    gettingPollByUserLoading:boolean,

    gettingAPollSuccessMessage:FullPoll[],
    gettingAPollErrorMessage:string, 
    gettingAPollLoading:boolean,

    deletingAPollSuccessMessage:string,
    deletingAPollErrorMessage:string,
    deletingAPollLoading:boolean
}


const initialState:PollInterface = {
    addingAPollErrorMessage : '',
    addingAPollLoading: false,
    addingAPollSuccessMessage: '',

    gettingAllPollsErrorMessage:'',
    gettingAllPollsLoading: false,
    gettingAllPollsSuccessMessage: [],

    gettingPollByUserErrorMessage: '',
    gettingPollByUserLoading: false,
    gettingPollByUserSuccessMessage:[],

    gettingAPollErrorMessage:'',
    gettingAPollLoading: false,
    gettingAPollSuccessMessage: [],

    deletingAPollErrorMessage:'',
    deletingAPollLoading: false,
    deletingAPollSuccessMessage: ''
}

export const pollReducers = createReducer(
    initialState,
    //for adding a poll
    on(PollActions.addingAPoll , (state)=>{
        return{
            ...state,
            addingAPollErrorMessage: '',
            addingAPollSuccessMessage: '',   
            addingAPollLoading:true
        }
    }),
    //for adding a poll success
    on(PollActions.addingAPollSuccess , (state, action)=>{
        return{
            ...state,
            addingAPollErrorMessage: '',
            addingAPollSuccessMessage: action.response.Message,
            addingAPollLoading:true
        }
    }),
    //for adding a poll failure
    on(PollActions.addingAPollFailure, (state,action)=>{
        return{
            ...state,
            addingAPollErrorMessage: action.Message,
            addingAPollSuccessMessage: '', 
            addingAPollLoading:true
        }
    }),

    //for getting all poll
    on(PollActions.gettingallpolls , (state)=>{
        return{
            ...state,
            gettingAllPollsErrorMessage: '',
            gettingAllPollsSuccessMessage: [],   
            gettingAllPollsLoading:true
        }
    }),
    //for getting all poll success
    on(PollActions.gettingallpollsSuccess , (state, action)=>{
        return{
            ...state,
            gettingAllPollsErrorMessage: '',
            gettingAllPollsSuccessMessage: action.Polls,
            gettingAllPollsLoading:true
        }
    }),
    //for getting all poll failure
    on(PollActions.gettingallpollsFailure, (state,action)=>{
        return{
            ...state,
            gettingAllPollsErrorMessage: action.Message,
            gettingAllPollsSuccessMessage: [], 
            gettingAllPollsLoading:true
        }
    }),

    //for getting a poll by user
    on(PollActions.gettingPollsByUser , (state)=>{
        return{
            ...state,
            gettingPollByUserErrorMessage: '',
            gettingPollByUserSuccessMessage:[],   
            gettingPollByUserLoading:true
        }
    }),
    //for getting a poll by user success
    on(PollActions.gettingPollsByUserSuccess , (state, action)=>{
        return{
            ...state,
            gettingPollByUserErrorMessage: '',
            gettingPollByUserSuccessMessage: action.Polls,
            gettingPollByUserLoading:true
        }
    }),
    //for getting a post failure
    on(PollActions.gettingPollsByUserFailure, (state,action)=>{
        return{
            ...state,
            gettingPollByUserErrorMessage: action.Message,
            gettingPollByUserSuccessMessage: [], 
            gettingPollByUserLoading:true
        }
    }),

    //for getting a specific poll
    on(PollActions.gettingAPoll , (state)=>{
        return{
            ...state,
            gettingAPollErrorMessage: '',
            gettingAPollSuccessMessage:[],   
            gettingAPollLoading:true
        }
    }),
    //for getting a poll success
    on(PollActions.gettingAPollSuccess , (state, action)=>{
        return{
            ...state,
            gettingAPollErrorMessage: '',
            gettingAPollSuccessMessage: action.OnePoll,
            gettingAPollLoading:true
        }
    }),
    //for getting a poll failure
    on(PollActions.gettingAPollFailure, (state,action)=>{
        return{
            ...state,
            gettingAPollErrorMessage: action.Message,
            gettingAPollSuccessMessage: [], 
            gettingAPollLoading:true
        }
    }),

    //for deleting a specific poll
    on(PollActions.deletingAPoll , (state)=>{
        return{
            ...state,
            deletingAPollErrorMessage: '',
            deletingAPollSuccessMessage: '',   
            deletingAPollLoading:true
        }
    }),
    //for deleting a poll success
    on(PollActions.deletingAPollSuccess , (state, action)=>{
        return{
            ...state,
            deletingAPollErrorMessage: '',
            deletingAPollSuccessMessage: action.response.Message,
            deletingAPollLoading:true
        }
    }),
    //for deleting a poll failure
    on(PollActions.deletingAPollFailure , (state, action)=>{
        return{
            ...state,
            deletingAPollErrorMessage: action.Message,
            deletingAPollSuccessMessage:'', 
            deletingAPollLoading:true
        }
    })
)