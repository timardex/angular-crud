import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <p [class]="alert.type">
      {{ alert.message }}
    </p>
  `,
  styles: [
    `p {
      padding: 20px;
      margin: 20px 0;
    
      &.success {
        border: 1px solid green;
      }
      
      &.warning {
        border: 1px solid red;
      }
    }`
  ]
})
export class AlertComponent implements OnInit {
  @Input() alert: { type: string, message: string, visibel: boolean };

  constructor() { }

  ngOnInit(): void {
  }

}
