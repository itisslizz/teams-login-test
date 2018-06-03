import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }


  public get getAdalConfig(): any {
    return {
      tenant: '',
      clientId: 'dc0202bb-a681-4a88-9de3-003d72b78ce0',
      redirectUri: window.location.origin + '/authentication-end',
      postLogoutRedirectUri: window.location.origin + '/',
      cacheLocation: 'localStorage'
    };
  }
}
