export interface User{
    userid: string,
    username:string,
    email:string,
    password:string,
    isDeleted:number,
    isEmailSent: number,
    role:string
}
export interface Payload{
    Sub: string,
    Name: string,
    role:string,
}