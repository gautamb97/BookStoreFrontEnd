import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(data: any , url: any) {
    return this.http.post(data, url)
  }

  postDataUsingToken(data: any, url: any, token: any) {
    const httpHeaders = new HttpHeaders({ 
      'token': token.token
  })
    return this.http.post(data, url, {headers: httpHeaders})
  }
}
