import { Component, OnInit } from '@angular/core';
import * as MicrosoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upn: string = "";
  constructor() { }

  ngOnInit() {
    MicrosoftTeams.initialize();

    MicrosoftTeams.getContext(function (context){

    })
  }

}
