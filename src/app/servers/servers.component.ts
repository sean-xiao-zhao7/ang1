import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  addStatus: string = 'normal';
  currentServerName: string = '';
  currentServerContent: string = '';
  currentServers: Array<any> = [];
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addServerHandler(serverNameInput: any) {
    this.addStatus = 'success';
    this.currentServerName = serverNameInput.value;
    this.currentServerContent = this.serverContentInput.nativeElement.value;
    this.currentServers.push({
      name: this.currentServerName,
      content: this.currentServerContent,
    });
    this.currentServerName = '';
    this.currentServerContent = '';
    this.serverContentInput.nativeElement.value = '';
    serverNameInput.value = '';
  }
}
