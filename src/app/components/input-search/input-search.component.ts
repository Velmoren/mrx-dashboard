import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html'
})
export class InputSearchComponent  {
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
