import { createActionGroup, props } from "@ngrx/store";
import { forgotPassEmail, forgotPassRes, LoginReq, LoginRes, RegisterResponse, resetPassPassword, resetPassRes, User } from "../../Models/userModel";



export const AuthActions = createActionGroup({
    source: "AUTH_API",
    events:{
        //log in auth
        'login':props<{user:LoginReq}>(),    //from the authentication service.....(what's being taken in)
        'login success':props<{response:LoginRes}>(), //the observable from authentication service
        'login failure':props<{Message:string}>(),  //for the json message

        //register auth
        'register':props<{newUser:User}>(),
        'register success':props<{response:RegisterResponse}>(),
        'register failure':props<{Message:string}>(),

        //for forgotpassword
        'forgotpassword':props<{email:forgotPassEmail}>(),
        'forgotpassword success':props<{response:forgotPassRes}>(),
        'forgotpassword failure':props<{Message:string}>(),

        //for resetpassword
        'resetpassword':props<{password:resetPassPassword}>(),
        'resetpassword success':props<{response:resetPassRes}>(),
        'resetpassword failure':props<{Message:string}>()
    }
})