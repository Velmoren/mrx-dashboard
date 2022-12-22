import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {

  public htmlValue: string = '<strong>it is value</strong>'
  public placeholder: string = 'placeholder'

}
