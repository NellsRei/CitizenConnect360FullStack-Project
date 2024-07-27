import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uid} from 'uuid';
import { User } from '../../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []

  private currentUser: User | null = null
  constructor(private router: Router) { }
  register(username: string, password: string, email:string, isDeleted:number, isEmailSent:number): boolean {
    if (this.users.find(user => user.username === username)) {
      return false // User already exists
    }

    const role = this.users.length === 0 ? 'admin' : 'user'
    const newUser: User = {
      userid: uid(),
      username,
      email,
      password,
      role,
      isDeleted,
      isEmailSent
    };
    this.users.push(newUser)
    return true
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password)
    if (user) {
      sessionStorage.setItem("role", user.role)
      this.currentUser = user;
      if (user.role === 'admin') {
        this.router.navigate(['/admindashboard'])
      } else {
        this.router.navigate(['/userdashboard'])
      }
      return true
    }
    return false
  }

  getCurrentUser(): User | null {
    return this.currentUser
  }
}

