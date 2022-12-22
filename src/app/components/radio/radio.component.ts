import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent {
  public value = 0

  public changeValue(value: any) {
    console.log(value)
  }
}
