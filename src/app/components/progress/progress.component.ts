import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements AfterViewInit {
  public value1 = 0
  public value2 = 0
  public value3 = 0
  public value4 = 0

  constructor(private detector: ChangeDetectorRef) {}

  public getRandomValue() {
    return Math.floor(Math.random() * 100)
  }

  public reRandom() {
    this.value1 = this.getRandomValue()
    this.value2 = this.getRandomValue()
    this.value3 = this.getRandomValue()
    this.value4 = this.getRandomValue()
  }

  ngAfterViewInit(): void {
    this.reRandom()
    this.detector.detectChanges()
  }
}
