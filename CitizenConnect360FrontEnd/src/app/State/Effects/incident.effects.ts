import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, exhaustMap, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IncidentService } from '../../Services/IncidentServices/incident.service';
import { IncidentActions } from '../Actions/incident.actions';
import { incidentRes } from '../../Models/incidentModel';

@Injectable()
export class IncidentEffects {
  constructor(
    private action$: Actions,
    private IncidentSer: IncidentService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  //adding an incident effect
  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IncidentActions.addingAnIncident),
      exhaustMap((req) =>
        this.IncidentSer.addIncident(req.newIncident).pipe(
          map((res) => {
            this.toastr.success('Incident Reported successfully', 'Success');
            this.router.navigate(['/user-incident']);
            return IncidentActions.addingAnIncidentSuccess({ response: res }); // Return success message
          }),
          // To catch errors and display the error message this.toastr.error("Incorrect Credentials")
          catchError((error) => {
            this.toastr.error('Try Again');
            return of(
              IncidentActions.addingAnIncidentFailure({ Message: error.error.Message })
            );
          })
        )
      )
    );
  });

  //getting all incidents effect
  getAllIncidents$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IncidentActions.gettingallincidents),
      concatMap(() =>
        this.IncidentSer.getallIncidents().pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return IncidentActions.gettingallincidentsSuccess({ Incidents: res });
          }),
          catchError((error) => {
            return of(
              IncidentActions.gettingallincidentsFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });


  //getting a specific incident
  getAIncident$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IncidentActions.gettingAnIncident),
      exhaustMap((req) =>
        this.IncidentSer.getIncident(req.id).pipe(
          map((res) => {
            // console.log(res)
            // console.log("Here")
            return IncidentActions.gettingAnIncidentSuccess({ Incident: res });
          }),
          catchError((error) => {
            return of(
              IncidentActions.gettingAnIncidentFailure({
                Message: error.error.Message,
              })
            );
          })
        )
      )
    );
  });

  //getting all posts by a specific user
  deleteIncident$ = createEffect(() =>
    this.action$.pipe(
      ofType(IncidentActions.deletingAnIncident),
      exhaustMap((action) =>
        this.IncidentSer.deleteIncident(action.id).pipe(
          map((response: incidentRes) =>
            IncidentActions.deletingAnIncidentSuccess({ response })
          ),
          catchError((error) =>
            of(IncidentActions.deletingAnIncidentFailure({ Message: error.message }))
          )
        )
      )
    )
  );
}
