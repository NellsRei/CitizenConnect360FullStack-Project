import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forgotPassEmail, forgotPassRes, LoginReq, LoginRes, RegisterResponse, resetPassPassword, resetPassRes, User } from '../../Models/userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly userUrl = "http://localhost:3100/user/"
  constructor(private http:HttpClient) { }

  registerUser(newUser:User):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.userUrl + "register", newUser)
  }

  loginUser(user:LoginReq): Observable<LoginRes>{
    return this.http.post<LoginRes>(this.userUrl + "login", user)
  }

  forgotPassword(email:forgotPassEmail): Observable<forgotPassRes>{
    return this.http.post<forgotPassRes>(this.userUrl + "forgot", email)
  }

  // resetPassword(newPassword:resetPassPassword): Observable<resetPassRes>{
  //   return this.http.patch<resetPassRes>(this.userUrl, + "reset" ,newPassword)
  // }
}
