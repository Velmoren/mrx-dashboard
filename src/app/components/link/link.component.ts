import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html'
})
export class LinkComponent {

  public logger(event: any) {
    console.log('clicked')
  }
}
