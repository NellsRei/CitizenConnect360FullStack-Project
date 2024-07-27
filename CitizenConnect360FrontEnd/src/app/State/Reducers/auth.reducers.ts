import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/auth.actions"
import { state } from "@angular/animations"

export interface AuthInterface{
    loginSuccessMessage:string,  //for login success message
    loginErrorMessage:string,  //for login error messages
    loginLoading:boolean,    //shows that login is loading

    registerSuccessMessage:string, //for register success message
    registerErrorMessage:string, //for register error message
    registerLoading:boolean, //shows that register is loading
}

const initialState:AuthInterface = {
    loginErrorMessage : '',
    loginLoading: false,
    loginSuccessMessage: '',

    registerErrorMessage: '',
    registerLoading: false,
    registerSuccessMessage: '',
}

export const authReducers = createReducer(
    initialState,
    //for login
    on(AuthActions.login , (state)=>{
        return{
            ...state,
            loginErrorMessage: '',
            loginSuccessMessage: '',    //reset incase previous login was an error
            loginLoading:true
        }
    }),
    //for login success
    on(AuthActions.loginSuccess , (state, action)=>{
        return{
            ...state,
            loginErrorMessage: '',
            loginSuccessMessage: action.response.Message,   //reset incase previous login was an error
            loginLoading:true
        }
    }),
    //for login failure
    on(AuthActions.loginFailure, (state,action)=>{
        return{
            ...state,
            loginErrorMessage: action.Message,
            loginSuccessMessage: '',    //reset incase previous login was an error
            loginLoading:true
        }
    }),

    //for register
    on(AuthActions.register , (state)=>{
        return{
            ...state,
            registerErrorMessage: '',
            registerSuccessMessage: '',    //reset incase previous login was an error
            registerLoading:true
        }
    }),
    //for register success
    on(AuthActions.registerSuccess , (state, action)=>{
        return{
            ...state,
            registerErrorMessage: '',
            registerSuccessMessage: action.response.Message, 
            registerLoading:true
        }
    }),
    //for register failure
    on(AuthActions.registerFailure, (state,action)=>{
        return{
            ...state,
            registerErrorMessage: action.Message,
            registerSuccessMessage: '',    
            registerLoading:true
        }
    })
)