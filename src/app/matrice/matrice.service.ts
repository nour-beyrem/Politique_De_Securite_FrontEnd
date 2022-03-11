import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriceService {

  Userurl="http://localhost:3000/matrice";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getMatrices(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getMatrice(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  getMatriceByReference(ref: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/ref/${ref}`);
  }

  createMatrice(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateMatrice(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteMatrice(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }
}
