import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FullPoll, Poll, pollReq, pollRes } from "../../Models/pollModel";



export const PollActions = createActionGroup({
    source: "AUTH_API",
    events:{
        //for adding a poll
        'addingAPoll':props<{newPoll:pollReq}>(),    //from the authentication service.....(what's being taken in)
        'addingAPoll success':props<{response:pollRes}>(), //the observable from authentication service
        'addingAPoll failure':props<{Message:string}>(),  //for the json message

        //for getting all polls
        'gettingallpolls':emptyProps,
        'gettingallpolls success':props<{Polls:FullPoll[]}>(),
        'gettingallpolls failure':props<{Message:string}>(),

        //for getting all polls by a specific user
        'gettingPollsByUser':props<{id: string}>(),
        'gettingPollsByUser success':props<{Polls:FullPoll[]}>(),
        'gettingPollsByUser failure':props<{Message:string}>(),

        //for getting a specific poll
        'gettingAPoll':props<{id: string}>(),
        'gettingAPoll success':props<{OnePoll:FullPoll[]}>(),
        'gettingAPoll failure':props<{Message:string}>(),

        //for deleting a specific poll
        'deletingAPoll':props<{id: string}>(),
        'deletingAPoll success':props<{response:pollRes}>(),
        'deletingAPoll failure':props<{Message:string}>()
    }
})