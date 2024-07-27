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
