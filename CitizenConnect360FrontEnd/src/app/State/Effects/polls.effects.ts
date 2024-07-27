import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, exhaustMap, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../Services/PostServices/post.service';
import { PostsActions } from '../Actions/posts.action';
import { PollService } from '../../Services/PollServices/poll.service';
import { PollActions } from '../Actions/poll.actions';

@Injectable()
export class PollsEffects {
  constructor(
    private action$: Actions,
    private pollSer: PollService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  //adding a post effect
  addPoll$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PollActions.addingAPoll),
      exhaustMap((req) =>
        this.pollSer.addPoll(req.newPoll).pipe(
          map((res) => {
            this.toastr.success('Poll added successfully', 'Success');
            this.router.navigate(['/govpolls']);
            return PollActions.addingAPollSuccess({ response: res }); // Return success message
          }),
          // To catch errors and display the error message this.toastr.error("Incorrect Credentials")
          catchError((error) => {
            this.toastr.error('Try Again');
            return of(
              PollActions.addingAPollFailure({ Message: error.error.Message })
            );
          })
        )
      )
    );
  });

  //getting all pollss effect
  getAllPolls$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PollActions.gettingallpolls),
      concatMap(() =>
        this.pollSer.getallpolls().pipe(
          map((res) => {
            console.log(res)
            // console.log("Here")
            return PollActions.gettingallpollsSuccess({Polls:res});
          }),
          catchError((error) => {
            return of(
              PollActions.gettingallpollsFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  getAllPollsByUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PollActions.gettingPollsByUser),
      exhaustMap((req) =>
        this.pollSer.getPollsByUser(req.id).pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return PollActions.gettingPollsByUserSuccess({ Polls: res });
          }),
          catchError((error) => {
            return of(
              PollActions.gettingPollsByUserFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  getAPoll$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PollActions.gettingAPoll),
      exhaustMap((req) =>
        this.pollSer.getPoll(req.id).pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return PollActions.gettingAPollSuccess({OnePoll: res });
          }),
          catchError((error) => {
            return of(
              PollActions.gettingAPollFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });
}
