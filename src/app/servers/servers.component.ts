import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  showAlert = {
    visibel: false,
    type: 'success',
    message: 'Server was created!'
  };
  serverName = '';
  serverStatus = 'online';
  listOfServers = [
    {
      id: 1,
      name: 'Server 1',
      status: 'offline',
    },
    {
      id: 2,
      name: 'Server 2',
      status: 'online',
    }
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  showAlertMessage = (message: string, id: number) => {
    const serverName = this.listOfServers.find(server => server.id === id).name;

    this.showAlert.visibel = true;
    this.showAlert.message = `Server ${serverName} was ${message}!`;
    
    setTimeout(() => {
      this.showAlert.visibel = false;
    }, 4000)
  }

  onSetServerStatus = (status: string) => {
    this.serverStatus = status;
  }

  onCreateServer = () => {
    const newServer = {
      id: this.listOfServers.length + 1,
      name: this.serverName,
      status: this.serverStatus,
    };

    this.listOfServers = [...this.listOfServers, newServer];
    this.serverName = '';
    this.showAlertMessage('created', newServer.id);
  };

  onDeleteServer = (id: number) => {
    this.showAlertMessage('deleted', id);
    this.listOfServers = this.listOfServers.filter(server => server.id !== id);
  }

  onUpdateServer = (element: {id: number, name: string, status: string}) => {
    this.listOfServers = this.listOfServers.map(server => {
      return server.id === element.id ?
        {...server,
          name: element.name,
          status: element.status,
        }
        : server
    });
    this.showAlertMessage('updated', element.id);
  }
}
