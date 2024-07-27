export interface Incident{
    incidentId: string,
    multimedia:string, 
    username: string, 
    incidentDescription: string,
    incidentLocation: string,
    isDeleted:number,
}

export interface incidentReq{
    multimedia:string, 
    incidentDescription: string,
    incidentLocation: string,
}

export interface incidentRes{
    Message:string
}