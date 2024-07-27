import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { PollActions } from '../State/Actions/poll.actions';
import { errorSelector } from '../State/Selectors/auth.selector';
import { pollSelector, pollsSelector } from '../State/Selectors/polls.selector';
import { map, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-polls',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './user-polls.component.html',
  styleUrl: './user-polls.component.css'
})
export class UserPollsComponent implements OnInit {

  constructor(private store:Store<AppState>,private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  shownav: boolean = false
  selectedChoice: string = ''
  toggleNav(): void {
    this.shownav = !this.shownav
  }
  polls$ = this.store.select(pollsSelector)
  ngOnInit(): void {
      this.store.dispatch(PollActions.gettingallpolls())
      this.store.select(pollsSelector).subscribe(polls=>{
        console.log(polls)
        
      })
      console.log(this.polls$)
      console.log(this.selectedChoice)
  }
  error$= this.store.select(errorSelector)
}
