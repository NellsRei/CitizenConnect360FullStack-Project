import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, postReq, postRes } from '../../Models/postModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly postUrl = "http://localhost:3100/posts/"
  constructor(private http:HttpClient) { }
  //a service for adding a Post
  addPost(newPost:postReq): Observable<postRes>{
    return this.http.post<postRes>(this.postUrl, newPost )
  }
  //a service for getting all posts
  getallposts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
  }
  //a service for getting all posts by a specific user
  getPostByUser(userid: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl + "user" + userid)
  }
  //a service for getting a single post
  getPost(postid: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl + postid)
  }
  //a service for deleting a post
  deletePost(id: string): Observable<postRes> {
    return this.http.delete<postRes>(this.postUrl + id)
  }
}
