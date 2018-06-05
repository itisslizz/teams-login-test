import { Component, OnInit } from '@angular/core';
import * as MicrosoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  public imagePath: string;
  public teamName: string;

  constructor() { 
    this.imagePath = '/assets/images/reporting.png',
    this.teamName = 'Team Name'
  }

  ngOnInit() {
    var component = this;
    MicrosoftTeams.getContext((context) =>{
      component.teamName = context.teamName;
    })
  }

}
