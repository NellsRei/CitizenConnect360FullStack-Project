import { createReducer, on } from "@ngrx/store"
import { state } from "@angular/animations"
import { PostsActions } from "../Actions/posts.action"
import { Post } from "../../Models/postModel"

export interface PostInterface{
    addingAPostSuccessMessage:string,  //for login success message
    addingAPostErrorMessage:string,  //for login error messages
    addingAPostLoading:boolean  ,  //shows that login is loading

    gettingAllPostsSuccessMessage:Post[],
    gettingAllPostsErrorMessage:string, 
    gettingAllPostsLoading:boolean ,

    gettingPostByUserSuccessMessage:Post[],
    gettingPostByUserErrorMessage:string, 
    gettingPostByUserLoading:boolean,

    gettingAPostSuccessMessage:Post[],
    gettingAPostErrorMessage:string, 
    gettingAPostLoading:boolean,

    deletingAPostSuccessMessage:string,
    deletingAPostErrorMessage:string,
    deletingAPostLoading:boolean
}


const initialState:PostInterface = {
    addingAPostErrorMessage : '',
    addingAPostLoading: false,
    addingAPostSuccessMessage: '',

    gettingAllPostsErrorMessage:'',
    gettingAllPostsLoading: false,
    gettingAllPostsSuccessMessage: [],

    gettingPostByUserErrorMessage: '',
    gettingPostByUserLoading: false,
    gettingPostByUserSuccessMessage:[],

    gettingAPostErrorMessage:'',
    gettingAPostLoading: false,
    gettingAPostSuccessMessage: [],

    deletingAPostErrorMessage:'',
    deletingAPostLoading: false,
    deletingAPostSuccessMessage: ''
}

export const postReducers = createReducer(
    initialState,
    //for adding a post
    on(PostsActions.addingAPost , (state)=>{
        return{
            ...state,
            addingAPostErrorMessage: '',
            addingAPostSuccessMessage: '',   
            addingAPostLoading:true
        }
    }),
    //for adding a post success
    on(PostsActions.addingAPostSuccess , (state, action)=>{
        return{
            ...state,
            addingAPostErrorMessage: '',
            addingAPostSuccessMessage: action.response.Message,
            addingAPostLoading:true
        }
    }),
    //for adding a post failure
    on(PostsActions.addingAPostFailure, (state,action)=>{
        return{
            ...state,
            addingAPostErrorMessage: action.Message,
            addingAPostSuccessMessage: '', 
            addingAPostLoading:true
        }
    }),

    //for getting all post
    on(PostsActions.gettingallposts , (state)=>{
        return{
            ...state,
            gettingAllPostsErrorMessage: '',
            gettingAllPostsSuccessMessage: [],   
            gettingAllPostsLoading:true
        }
    }),
    //for getting all post success
    on(PostsActions.gettingallpostsSuccess , (state, action)=>{
        return{
            ...state,
            gettingAllPostsErrorMessage: '',
            gettingAllPostsSuccessMessage: action.Posts,
            gettingAllPostsLoading:true
        }
    }),
    //for getting all post failure
    on(PostsActions.gettingallpostsFailure, (state,action)=>{
        return{
            ...state,
            gettingAllPostsErrorMessage: action.Message,
            gettingAllPostsSuccessMessage: [], 
            gettingAllPostsLoading:true
        }
    }),

    //for getting a post by user
    on(PostsActions.gettingPostByUser , (state)=>{
        return{
            ...state,
            gettingPostByUserErrorMessage: '',
            gettingPostByUserSuccessMessage:[],   
            gettingPostByUserLoading:true
        }
    }),
    //for getting a post by user success
    on(PostsActions.gettingPostByUserSuccess , (state, action)=>{
        return{
            ...state,
            gettingPostByUserErrorMessage: '',
            gettingPostByUserSuccessMessage: action.Post,
            gettingPostByUserLoading:true
        }
    }),
    //for getting a post failure
    on(PostsActions.gettingPostByUserFailure, (state,action)=>{
        return{
            ...state,
            gettingPostByUserErrorMessage: action.Message,
            gettingPostByUserSuccessMessage: [], 
            gettingPostByUserLoading:true
        }
    }),

    //for getting a specific post
    on(PostsActions.gettingAPost , (state)=>{
        return{
            ...state,
            gettingAPostErrorMessage: '',
            gettingAPostSuccessMessage:[],   
            gettingAPostLoading:true
        }
    }),
    //for getting a post success
    on(PostsActions.gettingAPostSuccess , (state, action)=>{
        return{
            ...state,
            gettingAPostErrorMessage: '',
            gettingAPostSuccessMessage: action.Post,
            gettingAPostLoading:true
        }
    }),
    //for getting a post failure
    on(PostsActions.gettingAPostFailure, (state,action)=>{
        return{
            ...state,
            gettingAPostErrorMessage: action.Message,
            gettingAPostSuccessMessage: [], 
            gettingAPostLoading:true
        }
    }),

    //for deleting a specific post
    on(PostsActions.deletingAPost , (state)=>{
        return{
            ...state,
            deletingAPostErrorMessage: '',
            deletingAPostSuccessMessage: '',   
            deletingAPostLoading:true
        }
    }),
    //for deleting a post success
    on(PostsActions.deletingAPostSuccess , (state, action)=>{
        return{
            ...state,
            deletingAPostErrorMessage: '',
            deletingAPostSuccessMessage: action.response.Message,
            deletingAPostLoading:true
        }
    }),
    //for deleting a post failure
    on(PostsActions.deletingAPostFailure , (state, action)=>{
        return{
            ...state,
            deletingAPostErrorMessage: action.Message,
            deletingAPostSuccessMessage:'', 
            deletingAPostLoading:true
        }
    })
)