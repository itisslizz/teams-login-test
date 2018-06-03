import { Component, OnInit } from '@angular/core';
import * as MicrosoftTeams from '@microsoft/teams-js';
import { AdalService } from '../adal.service';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;
  upn: string = "";
  public authenticate = () => {
    // Without Teams
    // this.router.navigateByUrl('authentication-start')

    // Teams Version
    // var authenticateParameters = new MicrosoftTeams.authentication.AuthenticateParameters;
    MicrosoftTeams.authentication.authenticate({
      url: window.location.origin + '/authentication-start',
      width: 600,
      height: 535,
      successCallback: () => {
        this.loadUser();
        this.handleSuccess("Successfully logged in.");
        this.loggedIn = true;
      },

      failureCallback: (reason) => {
        this.handleFailure("Login Failed: " + reason);
      }
    });
  };

  public userInfo: any;
  public errorMessage: string;
  public successMessage: string;
  public view:string = 'settings';

  constructor(private configService: ConfigService, private adalService: AdalService, private router: Router) { }

  ngOnInit() {
    let component = this;
    MicrosoftTeams.initialize();

    MicrosoftTeams.getContext(function (context){
      if (context.upn){
        component.upn = context.upn;
        component.adalService.createAuthenticationContext("scope=openid+profile&login_hint=" + encodeURIComponent(context.upn));
      } else {
        component.adalService.createAuthenticationContext("scope=openid+profile");
      }

      let user = component.adalService.userInfo;
      
      if (user && component.upn !== "") {
        if (user.userName !== component.upn){
          component.adalService.clearCache();
        }
      }
  
      let token = component.adalService.accessToken;
      if (token) {
        component.loggedIn = true;
        component.loadUser();
      } else {
        // show login Button
      }
    });
  }
  
  loadUser(){
    this.userInfo = this.adalService.userInfo;
  }

  handleFailure(reason){
    this.errorMessage = reason;
  }

  handleSuccess(message){
    this.successMessage = message;
  }

}
