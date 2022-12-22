import { Component } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent {
  public errorMessage: string = 'This is error'
  public errorMessages: string[] = [
    'this is first error',
    'this is second error'
  ]
}
