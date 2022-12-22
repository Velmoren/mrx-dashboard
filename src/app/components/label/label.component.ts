import { Component } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html'
})
export class LabelComponent {
  public changeCheckboxValue(e: boolean): void {
    console.log(e)
  }
}
