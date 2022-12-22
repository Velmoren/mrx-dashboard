import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {
  public activeTabId: number | string= 0;

  public onTabClick(event: number | string) {
    this.activeTabId = event;
  }
}
