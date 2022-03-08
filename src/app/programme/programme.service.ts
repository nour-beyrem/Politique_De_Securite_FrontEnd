import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  Userurl="http://localhost:3000/programme";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getProgrammes(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getProgramme(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }



  createProgramme(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateProgramme(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteProgramme(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
