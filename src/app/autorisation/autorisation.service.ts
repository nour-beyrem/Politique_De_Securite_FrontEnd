import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {

  Userurl="http://localhost:3000/autorisation";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getAutoriations(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getAutoriation(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }


  getActifByUser(user: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/user/${user}`);
  }

  getActifByResponsable(responsable: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/responsable/${responsable}`);
  }


  createAutoriation(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateAutoriation(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteAutoriation(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
