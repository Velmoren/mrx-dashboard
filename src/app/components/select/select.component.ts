import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  public selected = { id: 0, label: 'Первый' }
  public selectItems = [
    { id: 0, label: 'Первый' },
    { id: 1, label: 'Второй' },
    { id: 2, label: 'Третий' },
  ]

  public changeValue(value: any) {
    console.log(value)
  }

  public logger(event: any) {
    console.log('clicked')
  }
}
