import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActifService {

  Userurl="http://localhost:3000/actif";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getActifs(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getActif(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  getActifByUser(proprietaire: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/proprietaire/${proprietaire}`);
  }

  getActifByReference(reference: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/reference/${reference}`);
  }

  createActif(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateActif(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteActif(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
