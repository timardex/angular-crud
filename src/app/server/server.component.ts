import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  showFields = false;
  serverName = '';
  serverStatus = '';

  @Input() server: {id: number, name: string, status: string, visible: boolean};
  @Input() index: number;
  @Input() onDeleteServer: (args: number) => void;
  @Input() onUpdateServer: (server: {id: number, name: string, status: string}) => void;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteServer(this.server.id);
  }
  onUpdate() {
    const updatedServer = {
      id: this.server.id,
      name: this.serverName,
      status: this.serverStatus
    }
    this.onUpdateServer(updatedServer);
    this.showFields = false;
  }

  onToggleFields() {
    this.showFields = !this.showFields;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onSetServerStatus = (status: string) => {
    this.serverStatus = status;
  }
}
