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
    let component = this;
    MicrosoftTeams.initialize();

    MicrosoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
      MicrosoftTeams.settings.setSettings({
        entityId: "team",
        contentUrl: "https://luware-teams-tab-test.azurewebsites.net/",
        suggestedDisplayName: "Luware Team Manager",
        websiteUrl: "https://luware.com",
        removeUrl: "https://luware-teams-tab-test.azurewebsites.net/remove"
      });
      
      saveEvent.notifySuccess();
    });

    MicrosoftTeams.getContext( function (context){
      component.tenantId = context.tid;
      component.teamName = context.teamName; 
    })

    this.tenantId = "onetwothree";
    this.teamName = "Super Team";
    this.remainingLicenses = 10;

    MicrosoftTeams.settings.setValidityState(true);
  }

}
