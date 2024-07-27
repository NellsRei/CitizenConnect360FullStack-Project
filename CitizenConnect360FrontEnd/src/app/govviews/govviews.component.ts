import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { postsSelector } from '../State/Selectors/posts.selector';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { PostsActions } from '../State/Actions/posts.action';
import { postReq } from '../Models/postModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-govviews',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './govviews.component.html',
  styleUrl: './govviews.component.css'
})
export class GovviewsComponent {

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
  addPost(){
    console.log(this.statement)
    const newPost: postReq = {
      postDescription: this.statement
    }
    this.store.dispatch(PostsActions.addingAPost({ newPost }))
    this.statement = ""
    // this.store.dispatch(AuthActions.register({newUser:this.form.value}))
  }
}
