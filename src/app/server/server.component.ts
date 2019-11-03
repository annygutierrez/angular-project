import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  // The variables are gonna apply the type of itself automatically
  // This is just for demo purposes
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
