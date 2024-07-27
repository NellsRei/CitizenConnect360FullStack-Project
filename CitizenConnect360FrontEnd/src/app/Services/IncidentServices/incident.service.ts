import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident, incidentReq, incidentRes } from '../../Models/incidentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private readonly incidentUrl = "http://localhost:3100/incident/"
  constructor(private http:HttpClient) { }
  //a service for adding an incident
  addIncident(newIncident:incidentReq): Observable<incidentRes>{
    return this.http.post<incidentRes>(this.incidentUrl, newIncident )
  }
  //a service for getting all incidents
  getallIncidents(): Observable<Incident[]>{
    return this.http.get<Incident[]>(this.incidentUrl)
  }
  //a service for getting a single incidents
  getIncident(incidentid: string): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.incidentUrl + incidentid)
  }
  //a service for deleting an incident
  deleteIncident(id: string): Observable<incidentRes> {
    return this.http.delete<incidentRes>(this.incidentUrl + id)
  }
}
