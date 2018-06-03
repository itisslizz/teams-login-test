import { Component, OnInit } from '@angular/core';
import { AdalService } from '../adal.service';

@Component({
  selector: 'app-authentication-start',
  templateUrl: './authentication-start.component.html',
  styleUrls: ['./authentication-start.component.css']
})
export class AuthenticationStartComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
    this.adalService.login();
  }

}
