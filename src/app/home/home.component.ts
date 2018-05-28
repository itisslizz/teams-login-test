import { Component, OnInit } from '@angular/core';
import * as MicrosoftTeams from '@microsoft/teams-js';
import { AdalService } from '../adal.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upn: string = "";
  constructor(private configService: ConfigService, private adalService: AdalService) { }

  ngOnInit() {
    MicrosoftTeams.initialize();

    MicrosoftTeams.getContext(function (context){
      if (context.upn){
        this.upn = context.upn;
        this.adalService.createAuthenticationContext("scope=openid+profile&login_hint=" + encodeURIComponent(context.upn));
      } else {
        this.adalService.createAuthenticationContext("scope=openid+profile");
      }
    });

    let user = this.adalService.userInfo;
    if (user) {
      if (user.userName !== this.upn){
        this.adalService.clearCache();
      }
    }

    let token = this.adalService.accessToken;
    if (token) {
      // get UserInfo
    } else {
      // show login Button
    }


  }

}
