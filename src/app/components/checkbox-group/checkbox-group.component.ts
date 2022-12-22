import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html'
})
export class CheckboxGroupComponent {
  public checkboxGroupModel = [
    {
      id: 0,
      value: false,
      label: 'Первый'
    },
    {
      id: 1,
      value: false,
      label: 'Второй'
    },
    {
      id: 2,
      value: false,
      label: 'Третий'
    }
  ]
}
