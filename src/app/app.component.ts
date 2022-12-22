import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public valueTenants = 0
  public valueFonts = 0

  public tenants = [
    {
      id: 0,
      value: 0,
      label: 'Default',
      class: 'default-theme'
    },
    {
      id: 1,
      value: 1,
      label: 'Minfin',
      class: 'minfin-theme'
    },
    {
      id: 2,
      value: 2,
      label: 'VTB',
      class: 'vtb-theme'
    },
    {
      id: 3,
      value: 3,
      label: 'Absolute',
      class: 'absolute-theme'
    },
    {
      id: 4,
      value: 4,
      label: 'Black Green',
      class: 'black-green-theme'
    },
    {
      id: 5,
      value: 5,
      label: 'Blue',
      class: 'blue-theme'
    },
    {
      id: 6,
      value: 6,
      label: 'Brown',
      class: 'brown-theme'
    },
    {
      id: 7,
      value: 7,
      label: 'Dark Gray',
      class: 'dark-gray-theme'
    },
    {
      id: 8,
      value: 8,
      label: 'Pink',
      class: 'pink-theme'
    },
    {
      id: 9,
      value: 9,
      label: 'Red',
      class: 'red-theme'
    },
    {
      id: 10,
      value: 10,
      label: 'Turquoise',
      class: 'turquoise-theme'
    },
    {
      id: 11,
      value: 11,
      label: 'Yellow',
      class: 'yellow-theme'
    },
  ]

  public fonts = [
    {
      id: 0,
      value: 0,
      label: 'PT Sans',
      class: 'PtSans'
    },
    {
      id: 1,
      value: 1,
      label: 'Open Montserrat',
      class: 'Open_Montserrat'
    },
    {
      id: 2,
      value: 2,
      label: 'Proxima Nova',
      class: 'ProximaNova'
    },
    {
      id: 3,
      value: 3,
      label: 'VTB Group',
      class: 'VTBGroup'
    },
    {
      id: 4,
      value: 4,
      label: 'Tenor',
      class: 'TenorFonts'
    },
  ]

  public get getTenant(): string {
    return this.tenants[this.valueTenants].class
  }

  public get getFonts(): string {
    return this.fonts[this.valueFonts].class
  }

  public get getClasses(): string {
    return `${this.getTenant} ${this.getFonts}`
  }
}
