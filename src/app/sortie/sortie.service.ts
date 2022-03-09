import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortieService {

  Userurl="http://localhost:3000/sortie";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getSorties(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getSortie(ref: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${ref}`);
  }

  getSortieByAgent(agentS: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/agent/${agentS}`);
  }



  createSortie(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateSortie(ref: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${ref}`, data);
  }

  deleteSortie(ref: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${ref}`);
  }
}
