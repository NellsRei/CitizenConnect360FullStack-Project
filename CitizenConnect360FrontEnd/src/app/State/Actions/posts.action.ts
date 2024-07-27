import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Post, postReq, postRes } from "../../Models/postModel";



export const PostsActions = createActionGroup({
    source: "AUTH_API",
    events:{
        //for adding a post
        'addingAPost':props<{newPost:postReq}>(),    //from the authentication service.....(what's being taken in)
        'addingAPost success':props<{response:postRes}>(), //the observable from authentication service
        'addingAPost failure':props<{Message:string}>(),  //for the json message

        //for getting all posts
        'gettingallposts':emptyProps(),
        'gettingallposts success':props<{Posts:Post[]}>(),
        'gettingallposts failure':props<{Message:string}>(),

        //for getting posts by a specific user
        'gettingPostByUser':props<{id: string}>(),
        'gettingPostByUser success':props<{Post:Post[]}>(),
        'gettingPostByUser failure':props<{Message:string}>(),

        //for getting a specific post
        'gettingAPost':props<{id: string}>(),
        'gettingAPost success':props<{Post:Post[]}>(),
        'gettingAPost failure':props<{Message:string}>(),

        //for deleting a specific post
        'deletingAPost':props<{id: string}>(),
        'deletingAPost success':props<{response: postRes}>(),
        'deletingAPost failure':props<{Message:string}>()
    }
})