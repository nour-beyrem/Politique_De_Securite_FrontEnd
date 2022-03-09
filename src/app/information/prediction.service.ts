import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {}

  url:any ="http://127.0.0.1:5000";
  predir(data: any): Observable<any> {
      console.log(data)
    return this.http
      .post(this.url+"/predict",data,{responseType: 'text' })

  }
}
