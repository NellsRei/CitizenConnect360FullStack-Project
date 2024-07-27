export interface Post{
    postId:string,
    username:string,
    userid:string,
    postDescription:string,
    formattedDateTime: string
}

export interface postReq {
    postDescription: string
}
  

export interface postRes{
    Message:string
}