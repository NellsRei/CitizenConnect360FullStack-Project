import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FullPoll, pollReq } from '../Models/pollModel';
import { PollActions } from '../State/Actions/poll.actions';
import { AppState } from '../State';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-govcreatepoll',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule, RouterModule],
  templateUrl: './govcreatepoll.component.html',
  styleUrl: './govcreatepoll.component.css'
})
export class GovcreatepollComponent implements OnInit {

  form!:FormGroup
  Poll!:FullPoll[]
  constructor(private store:Store<AppState>,private router:Router, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      question : new FormControl(null, Validators.required),
      choices:this.fb.array([])
    })
    
  }
  get choices():FormArray{
    return this.form.get('choices') as FormArray
  }
  // addChoice(){
  //   this.choices.push()
  // }
  onSubmit(){
    console.log(this.form.value)
    this.store.dispatch(PollActions.addingAPoll({newPoll: this.form.value }))
    this.form.reset()
  }
}