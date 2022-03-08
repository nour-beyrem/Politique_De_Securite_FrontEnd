import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  Userurl="http://localhost:3000/document";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getDocuments(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getDocument(id: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${id}`);
  }

  getDocumentByQui(qui: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/politique/${qui}`);
  }

  getDocumentByType(typeChapitre: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/type/${typeChapitre}`);
  }

  createDocument(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateDocument(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${id}`, data);
  }

  deleteDocument(id: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${id}`);
  }

}
