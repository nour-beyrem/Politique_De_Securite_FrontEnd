import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelluleService {

  Userurl="http://localhost:3000/cellule";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getCellules(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getCellule(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  createCellule(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateCellule(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteCellule(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }

  getCelluleByRef(reference: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/ref/${reference}`);
  }
}
