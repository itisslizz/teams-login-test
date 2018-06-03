import { Component, OnInit } from '@angular/core';
import * as MicrosoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  tenantId: string;
  teamName: string;
  remainingLicenses: number;

  constructor() { }

  ngOnInit() {
    MicrosoftTeams.initialize();

    MicrosoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
      MicrosoftTeams.settings.setSettings({
        entityId: "team",
        contentUrl: "https://7c18c8b1.ngrok.io/",
        suggestedDisplayName: "Luware Team Manager",
        websiteUrl: "https://luware.com",
        removeUrl: "https://7c18c8b1.ngrok.io/remove"
      });
      
      saveEvent.notifySuccess();
    });

    MicrosoftTeams.getContext( function (context){
      this.tenantId = context.tid;
      this.teamName = context.teamName; 
    })

    this.tenantId = "onetwothree";
    this.teamName = "Super Team";
    this.remainingLicenses = 10;

    MicrosoftTeams.settings.setValidityState(true);
  }

}
