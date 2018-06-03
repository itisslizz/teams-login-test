import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { adal } from 'adal-angular';
import * as AuthenticationContext from 'adal-angular/lib/adal.js'; 

let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable({
  providedIn: 'root'
})
export class AdalService {

  private context: adal.AuthenticationContext;
  private config: any;


  constructor(private configService: ConfigService) {
    this.config = configService.getAdalConfig;
    this.context = new createAuthContextFn(this.config);
   }

   createAuthenticationContext(extraQueryParameters: string){
     this.config.extraQueryParameters = extraQueryParameters;
     this.context = new createAuthContextFn(this.config);
   }


   login(){
     this.context.login();
   }

   logout(){
     this.context.logOut();
   }

   handleCallback(hash: string){
    if (!this.context.isCallback(hash))
        return;

    var requestInfo = this.context.getRequestInfo(hash);
    if (requestInfo.valid)
        this.context.saveTokenFromHash(requestInfo); //Save the token and user information. 
   }

   clearCache(){
     this.context.clearCache();
   }

   public get userInfo() {
     return this.context.getCachedUser();
   }

   public get loginError(){
     return this.context.getLoginError();
   }
   public get accessToken(){
     return this.context.getCachedToken(this.configService.getAdalConfig.clientId);
   }

   public get isAuthenticated(){
     return this.userInfo && this.accessToken;
   }
}
