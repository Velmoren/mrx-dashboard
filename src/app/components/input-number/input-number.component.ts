import { Component } from '@angular/core';
import { InputNumberType } from "myrtex-lib/lib/components/form/input-number/input-number.enum";

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent {

  public value = 123456789
  public type: InputNumberType = 'int'

}
