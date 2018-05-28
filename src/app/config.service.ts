import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }


  public get getAdalConfig(): any {
    return {
      tenant: '',
      clientId: '',
      redirectUri: window.location.origin + '/authentication-end',
      postLogoutRedirectUri: window.location.origin + '/',
    };
  }
}
