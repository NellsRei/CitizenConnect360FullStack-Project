import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/UserServices/user.service';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { errorSelector } from '../State/Selectors/auth.selector';
import { AuthActions } from '../State/Actions/auth.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form!:FormGroup

  constructor(private userService: UserService, private router:Router, private store:Store<AppState>) {}

  email: string = ''
  password: string = ''
  username:string = ''
  isDeleted:number = 0 
  isEmailSent:number = 0

  ngOnInit(): void {
    this.form = new FormGroup({
      username : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.email]),
      password: new FormControl(null, this.passwordValidator) 
    })
  }
  //for the error selector
  error$ = this.store.select(errorSelector)
  onSubmit(){
    console.log(this.form)
    this.store.dispatch(AuthActions.register({newUser:this.form.value}))
    if (this.userService.register(this.email, this.password, this.username, this.isDeleted, this.isEmailSent)) {
      console.log(this.email, this.password, this.username, this.isDeleted, this.isEmailSent)
      
      this.router.navigate(["/login"])
    } else {
      alert('User already exists')
    }
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == undefined) {
      return { passwordValidator: true }
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);

      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }
    }
    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar) {
      console.log('Strong Password')
      return null
    } else {
      console.log('Weak Password. Make it stronger')
      return { passwordValidator: true }
    }
  }
}
