import { Component, OnInit } from '@angular/core';
import { AdalService } from '../adal.service';
import { Router } from '@angular/router';
import * as MicrosoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-authentication-end',
  templateUrl: './authentication-end.component.html',
  styleUrls: ['./authentication-end.component.css']
})
export class AuthenticationEndComponent implements OnInit {

  constructor(private adalService: AdalService, private router: Router) { }

  getHashParameters = function () {
    let hashParams = {};
    location.hash.substr(1).split("&").forEach(function(item) {
        let s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
        hashParams[k] = v;
    });
    return hashParams;
  }

  ngOnInit() {
    MicrosoftTeams.initialize();
    let hashParams = this.getHashParameters();
    console.log(hashParams);
    if (hashParams["error"]){
      MicrosoftTeams.authentication.notifyFailure(hashParams["error"])
    } else if(hashParams["id_token"]){
      let expectedState = localStorage.getItem("simple.state");
      if (expectedState !== hashParams["state"]){
        
        MicrosoftTeams.authentication.notifyFailure("StateDoesNotMatch");
      } else {
        MicrosoftTeams.authentication.notifySuccess(hashParams["id_token"]);
      }
    }
  }

}
