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
    role:string
}

export interface RegisterResponse{
    Message:string
}

export interface LoginReq{
    userid:string,
    Email:string,
    Password:string
}

export interface LoginRes{
    Message:string,
    token:string,
    role:string,
    username:string,
    id:string
}
export interface forgotPassEmail{
    email:string
}

export interface forgotPassRes{
    Message:string
}

export interface resetPassPassword{
    password: string,
}
export interface resetPassRes{
    Message:string
}