import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js'; 

let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable({
  providedIn: 'root'
})
export class AdalService {

  private context: adal.AuthenticationContext;
  private config: any;


  constructor(private configService: ConfigService) {
    this.config = configService.getAdalConfig;
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

   handleCallback(){
     this.context.handleWindowCallback();
   }

   clearCache(){
     this.context.clearCache();
   }

   public get userInfo() {
     return this.context.getCachedUser();
   }

   public get accessToken(){
     return this.context.getCachedToken(this.configService.getAdalConfig.clientId);
   }

   public get isAuthenticated(){
     return this.userInfo && this.accessToken;
   }
}
