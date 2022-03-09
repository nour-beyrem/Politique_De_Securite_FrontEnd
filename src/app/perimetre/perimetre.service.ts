import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerimetreService {


  Userurl="http://localhost:3000/perimetre";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getPerimetres(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getPerimetre(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }



  createPerimetre(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updatePerimetre(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deletePerimetre(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
