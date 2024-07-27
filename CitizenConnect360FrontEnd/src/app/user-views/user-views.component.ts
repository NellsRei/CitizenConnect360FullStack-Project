import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { AllpostErrorSelector, postsSelector } from '../State/Selectors/posts.selector';
import { PostsActions } from '../State/Actions/posts.action';
import { FormsModule } from '@angular/forms';
import { errorSelector } from '../State/Selectors/auth.selector';
import { postReq } from '../Models/postModel';

@Component({
  selector: 'app-user-views',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './user-views.component.html',
  styleUrl: './user-views.component.css'
})
export class UserViewsComponent implements OnInit {

  statement:string = ''
  currentUserId: string = ''
  shownav: boolean = false
  showButton: boolean = false

  toggleNav(): void {
    this.shownav = !this.shownav
  }
  constructor(private store:Store<AppState>,private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  posts$= this.store.select(postsSelector)
  ngOnInit():void {
    this.currentUserId = localStorage.getItem('userid') || ''; // Get current user's ID
    // console.log(this.currentUserId)
    this.store.dispatch(PostsActions.gettingallposts())

  }
  
  //for the error selector
  error$ = this.store.select(errorSelector)
  addPost(){
    console.log(this.statement)
    const newPost: postReq = {
      postDescription: this.statement
    }
    this.store.dispatch(PostsActions.addingAPost({ newPost }))
    this.statement = ""
    // this.store.dispatch(AuthActions.register({newUser:this.form.value}))
  }
  //for toggling the delete button
  canDeletePost(postUserId: string): boolean {
    return postUserId === this.currentUserId;
  }
  deletePost(postId:string){
    console.log("Post now deleted", postId)
    this.store.dispatch(PostsActions.deletingAPost({id:postId}))
  }
}
