import { Component, OnInit } from '@angular/core';
import { TEAMMEMBERS, CHANNELS } from '../mock-team-members';
import { TeamMember } from '../team-member';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  teamMembers: TeamMember[] = TEAMMEMBERS;
  helpDeskChannel: string = "HelpDesk";
  channels: string[] = CHANNELS;
  constructor() { }

  ngOnInit() {
  }

}
