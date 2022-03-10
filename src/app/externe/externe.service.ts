import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExterneService {

  Userurl="http://localhost:3000/externe";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getExternes(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getExterne(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }



  getExterneByType(type: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/type/${type}`);
  }

  createExterne(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateExterne(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteExterne(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }

}
