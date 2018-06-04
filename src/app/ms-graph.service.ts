import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
import { AdalService } from './adal.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MsGraphService {
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private httpClient: HttpClient, private adalService: AdalService) { }

  getUser(){
    this.httpOptions.headers.append('Authorization', 'Bearer ' + this.adalService.accessToken);
    this.httpClient.get("https://graph.microsoft.com/v1.0/me/",this.httpOptions);
  }
}
