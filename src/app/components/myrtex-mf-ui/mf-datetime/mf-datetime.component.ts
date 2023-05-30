import { Component } from '@angular/core';

@Component({
  selector: 'app-mf-datetime',
  templateUrl: './mf-datetime.component.html',
})
export class MfDatetimeComponent {

  public value1 = ''
  public value2 = ''
  public value3 = ''
  public value = '2022-01-04T04:01:59.595Z'

  constructor() { }

  ngOnInit(): void {
  }

  public changeValue1(val: any) {
    console.log('val', val)
    this.value1 = val
  }

  public changeValue2(val: any) {
    console.log('val', val)
    this.value2 = val
  }

  public changeValue3(val: any) {
    console.log('val', val)
    this.value3 = val
  }
}
