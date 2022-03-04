import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  Userurl="http://localhost:3000/reunion";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getReunions(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getReunion(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  createReunion(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateReunion(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteReunion(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
