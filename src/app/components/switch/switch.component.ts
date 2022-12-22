import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  public value = false

  public logger(value: any) {
    console.log(value)
    this.value = value
  }
}
