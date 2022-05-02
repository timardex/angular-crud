import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  newServerName = '';

  @Input() serverName: string;
  @Input() serverStatus: string;
  @Input() onSetServerStatus: (status: string) => void;
  @Output() onChange = new EventEmitter();
  
  change(newValue: string) {
    console.log('newvalue', newValue)
    this.newServerName = newValue;
    this.onChange.emit({value: newValue});
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
