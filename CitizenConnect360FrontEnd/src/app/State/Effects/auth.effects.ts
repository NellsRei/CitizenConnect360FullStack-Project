import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../Actions/auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthenticationService } from '../../Services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private auth: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  //login effect
  loginUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ user }) =>
        this.auth.loginUser(user).pipe(
          map((res) => {
            localStorage.setItem('role', res.role); // Set role in local storage
            localStorage.setItem('token',res.token)
            localStorage.setItem('userid',res.id)
            localStorage.setItem('username', res.username)
            // console.log(res.id)
            // console.log(res)
            this.toastr.success('Login Successful', 'Welcome')
            if (res.role === 'user') {
              this.router.navigate(['/userdashboard']); // Navigate to user dashboard if role is user
            } else {
              this.router.navigate(['/admindashboard']); // Navigate to home page for other roles
            }
            return AuthActions.loginSuccess({ response: res }); // Return success message
          }),
          // To catch errors and display the error message this.toastr.error("Incorrect Credentials")
          catchError((error) => {
            this.toastr.error('Incorrect Credentials', 'Try Again')
            return of(AuthActions.loginFailure({ Message: error.error.Message }))
          }
        )
      )
      )
    );
  });

  //register effect
  registerUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.register),
      exhaustMap(({ newUser }) =>
        this.auth.registerUser(newUser).pipe(
          map((res) => {
          
              this.router.navigate(['/login']); // Navigate to login form
            return AuthActions.registerSuccess({ response: res }); // Return success message
          }),
          // To catch errors and display the error message this.toastr.error("Incorrect Credentials")
          catchError((error) => {
            this.toastr.error("Incorrect Credentials")
            return of(AuthActions.registerFailure({Message: error.error.Message }))
          }
        )
      )
      )
    );
  });
}
