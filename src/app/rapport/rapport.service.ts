import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  Userurl="http://localhost:3000/rapport";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getRapports(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getRapport(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  createRapport(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateRapport(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteRapport(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
