import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/UserServices/user.service';
import { errorSelector } from '../State/Selectors/auth.selector';
import { AuthActions } from '../State/Actions/auth.actions';
import { AppState } from '../State';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!:FormGroup

  email: string = '';
  password: string = '';
  role:string = ''
  
  constructor(private store:Store<AppState>, private router:Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email : new FormControl(null, [Validators.email]),
      password: new FormControl(null, Validators.required) 
    })  
  }
  //for the error selector
  error$ = this.store.select(errorSelector)
  onSubmit(){
    // console.log("Hi")
    // console.log(this.form.value)
    this.store.dispatch(AuthActions.login({user:this.form.value}))
    
    
  }
}
