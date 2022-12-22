import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent implements AfterViewInit {
  public value1 = 0
  public value2 = 0
  public value3 = 0
  public value4 = 0

  constructor(private detector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.reRandom()
    this.detector.detectChanges()
  }

  public getRandomValue() {
    return Math.floor(Math.random() * 100)
  }

  public reRandom() {
    this.value1 = this.getRandomValue()
    this.value2 = this.getRandomValue()
    this.value3 = this.getRandomValue()
    this.value4 = this.getRandomValue()
  }

  public ending() {
    this.value1 = 100
    this.value2 = 100
    this.value3 = 100
    this.value4 = 100
  }
}
