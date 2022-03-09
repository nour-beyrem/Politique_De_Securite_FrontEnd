import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  Userurl="http://localhost:3000/information";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getInformations(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getInformation(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  createInformation(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateInformation(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteInformation(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
