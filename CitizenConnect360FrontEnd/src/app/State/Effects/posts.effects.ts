import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, exhaustMap, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../Services/PostServices/post.service';
import { PostsActions } from '../Actions/posts.action';
import { postRes } from '../../Models/postModel';

@Injectable()
export class PostsEffects {
  constructor(
    private action$: Actions,
    private postSer: PostService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  //adding a post effect
  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostsActions.addingAPost),
      exhaustMap((req) =>
        this.postSer.addPost(req.newPost).pipe(
          map((res) => {
            this.toastr.success('Post added successfully', 'Success');
            this.router.navigate(['/user-views']);
            return PostsActions.addingAPostSuccess({ response: res }); // Return success message
          }),
          // To catch errors and display the error message this.toastr.error("Incorrect Credentials")
          catchError((error) => {
            this.toastr.error('Try Again');
            return of(
              PostsActions.addingAPostFailure({ Message: error.error.Message })
            );
          })
        )
      )
    );
  });

  //getting all posts effect
  getAllPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostsActions.gettingallposts),
      concatMap(() =>
        this.postSer.getallposts().pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return PostsActions.gettingallpostsSuccess({ Posts: res });
          }),
          catchError((error) => {
            return of(
              PostsActions.gettingallpostsFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  getAllPostsByUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostsActions.gettingPostByUser),
      exhaustMap((req) =>
        this.postSer.getPostByUser(req.id).pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return PostsActions.gettingPostByUserSuccess({ Post: res });
          }),
          catchError((error) => {
            return of(
              PostsActions.gettingPostByUserFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  getAPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostsActions.gettingAPost),
      exhaustMap((req) =>
        this.postSer.getPost(req.id).pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return PostsActions.gettingAPostSuccess({ Post: res });
          }),
          catchError((error) => {
            return of(
              PostsActions.gettingAPostFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  deletePost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostsActions.deletingAPost),
      exhaustMap((action) =>
        this.postSer.deletePost(action.id).pipe(
          map((response: postRes) =>
            PostsActions.deletingAPostSuccess({ response })
          ),
          catchError((error) =>
            of(PostsActions.deletingAPostFailure({ Message: error.message }))
          )
        )
      )
    )
  );
}
