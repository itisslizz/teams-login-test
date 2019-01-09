import { Component, OnInit } from '@angular/core';
import { AdalService } from '../adal.service';

@Component({
  selector: 'app-authentication-start',
  templateUrl: './authentication-start.component.html',
  styleUrls: ['./authentication-start.component.css']
})
export class AuthenticationStartComponent implements OnInit {

  constructor(private adalService: AdalService) { }


  _guid = function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  toQueryString = function(queryParams) {
    let encodedQueryParams = [];
    for (let key in queryParams) {
        encodedQueryParams.push(key + "=" + encodeURIComponent(queryParams[key]));
    }
    return encodedQueryParams.join("&");
  }

  ngOnInit() {
    // this.adalService.login();
    let state = this._guid();
    localStorage.setItem("simple.state", state);
    localStorage.removeItem("simple.error");

    let queryParams = {
      client_id: "dc0202bb-a681-4a88-9de3-003d72b78ce0",
      response_type: "id_token",
      redirect_uri: window.location.origin + "/authentication-end",
      nonce: this._guid(),
      state: state
    };
    let authorizeEndpoint = "https://login.microsoftonline.com/2bcaec71-66d9-4291-bc5a-c67054a7e94d/oauth2/authorize?" 
        + this.toQueryString(queryParams);
    window.location.assign(authorizeEndpoint);
    }


}
