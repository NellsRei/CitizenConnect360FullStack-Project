import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { IncidentSelector, IncidentsSelector } from '../State/Selectors/incidents.selector';
import { IncidentActions } from '../State/Actions/incident.actions';
import { errorSelector } from '../State/Selectors/auth.selector';
import { Observable } from 'rxjs';
import { Incident } from '../Models/incidentModel';

@Component({
  selector: 'app-user-incident',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-incident.component.html',
  styleUrl: './user-incident.component.css'
})
export class UserIncidentComponent implements OnInit {

  constructor(private store:Store<AppState>,private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  shownav: boolean = false

  incidents$!: Observable<Incident[]>

  ngOnInit(): void {
    // console.log(this.shownav)
    this.store.dispatch(IncidentActions.gettingallincidents())
    this.incidents$= this.store.select(IncidentsSelector)
  }

  toggleNav(): void {
    this.shownav = !this.shownav
  }
  error$ = this.store.select(errorSelector)
}
