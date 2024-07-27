export interface FullPoll{
    poll: Poll
    pollChoices: pollchoices[]
}

export interface Poll{
    pollId: string;
    userid: string;
    pollQuestion: string;
    isDeleted: number;
}
export interface pollchoices{
    choiceid:string,
    pollId:string, 
    choice:string
}

export interface pollReq{
    pollQuestion: string;
    PollChoices : pollchoices[]
}

export interface pollRes{
    Message:string
}