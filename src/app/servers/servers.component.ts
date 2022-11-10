import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  newServerName: string = '';
  allowAddServer: boolean = false;
  addStatus: string = 'normal';
  currentServerName: string = '';
  currentServers: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}

  addServerHandler() {
    this.addStatus = 'success';
    this.currentServerName = this.newServerName;
    this.newServerName = '';
    this.allowAddServer = false;
    this.currentServers.push(this.currentServerName);
  }

  serverNameInputHandler(event: any) {
    this.newServerName = event.target.value;
    this.allowAddServer = this.newServerName !== '';
  }
}
