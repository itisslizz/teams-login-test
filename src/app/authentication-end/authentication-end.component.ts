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

  ngOnInit() {
    MicrosoftTeams.initialize();
    this.adalService.handleCallback(window.location.hash);

    if (this.adalService.userInfo) {
      MicrosoftTeams.authentication.notifySuccess()
    } else {
        microsoftTeams.authentication.notifyFailure(this.adalService.loginError);
    }
    this.router.navigateByUrl('/home');
  }

}
