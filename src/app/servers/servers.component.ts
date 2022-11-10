import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  newServerName: string = '';
  allowAddServer: boolean = this.newServerName !== '';

  constructor() {}

  ngOnInit(): void {}

  addServerHandler() {}

  serverNameInputHandler(event: any) {
    this.newServerName = event.target.value;
    this.allowAddServer = this.newServerName !== '';
  }
}
