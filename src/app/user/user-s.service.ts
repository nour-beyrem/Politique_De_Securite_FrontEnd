import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSService {

  Userurl="http://localhost:3000/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getUsers(): Observable<any>{
    return this.httpClient.get(this.Userurl);
  }

  getUser(username: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/${username}`);
  }

  getUserByRole(role: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/role/${role}`);
  }

  getUserBySortie(sortie: any): Observable<any> {
    return this.httpClient.get(`${this.Userurl}/sortie/${sortie}`);
  }

  createUser(data: any): Observable<any> {
    return this.httpClient.post(this.Userurl, data);
  }

  updateUser(username: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.Userurl}/${username}`, data);
  }

  deleteUser(username: any): Observable<any> {
    return this.httpClient.delete(`${this.Userurl}/${username}`);
  }

}
