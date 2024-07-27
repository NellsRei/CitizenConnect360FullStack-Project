import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IncidentActions } from '../State/Actions/incident.actions';
import { IncidentsSelector } from '../State/Selectors/incidents.selector';
import { errorSelector } from '../State/Selectors/auth.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { Incident } from '../Models/incidentModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-govincident',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './govincident.component.html',
  styleUrl: './govincident.component.css'
})
export class GovincidentComponent {

  constructor(private store:Store<AppState>, private router:Router){}
  shownav: boolean = false
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

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
