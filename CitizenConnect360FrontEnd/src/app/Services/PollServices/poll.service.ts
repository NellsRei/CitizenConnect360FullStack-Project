import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FullPoll, Poll, pollReq, pollRes } from '../../Models/pollModel';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private readonly pollUrl = "http://localhost:3100/polls/"
  constructor(private http:HttpClient) { }
  //a service for adding a Poll
  addPoll(newPoll:pollReq): Observable<pollRes>{
    return this.http.post<pollRes>(this.pollUrl, newPoll )
  }
  //a service for getting all polls
  getallpolls(): Observable<FullPoll[]> {
    return this.http.get<FullPoll[]>(this.pollUrl)
  }
  //a service for getting all polls by a specific user
  getPollsByUser(userid: string): Observable<FullPoll[]> {
    return this.http.get<FullPoll[]>(this.pollUrl + "user" + userid)
  }
  //a service for getting a single poll
  getPoll(pollid: string): Observable<FullPoll[]> {
    return this.http.get<FullPoll[]>(this.pollUrl + pollid)
  }
  //a service for deleting a poll
  deletePoll(id: string): Observable<pollRes> {
    return this.http.delete<pollRes>(this.pollUrl + id)
  }
}
