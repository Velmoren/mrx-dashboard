import { Component } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {
  public textValueEmpty: string = ''
  public textValue: string = 'text text'

  public changeTextValueEmpty(value: string): void {
    console.log(value)
    this.textValueEmpty = value
  }

  public changeTextValue(value: string): void {
    console.log(value)
    this.textValue = value
  }
}
