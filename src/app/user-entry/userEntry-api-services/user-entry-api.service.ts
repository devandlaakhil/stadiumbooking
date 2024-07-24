import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEntryApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8000'; // Your Node.js backend API URL

  get(relativeUri:string,header?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${relativeUri}`);
  }

  post(relativeUri:string,payload?: any, headers?: { [header: string]: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${relativeUri}`, payload, { headers: new HttpHeaders(headers) });
  }
  

}
