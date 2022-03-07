import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  Userurl="http://localhost:3000/incident";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getIncidents(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getIncident(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  createIncident(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateIncident(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteIncident(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
