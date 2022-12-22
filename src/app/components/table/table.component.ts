import { Component } from '@angular/core';
import {
  ContentSettings,
  HeaderSettings,
  PaginatorSettings,
  SortDescriptor,
  TableType
} from "myrtex-lib/lib/components/table/table.enum";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  public data = [
    {
      id: 0,
      number: '19-2-000189',
      name: 'Доброе сердце Магнитки',
      description: 'МЕСТНАЯ ОБЩЕСТВЕННАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ТЕРРИТОРИАЛЬНОГО ОБЩЕСТВЕННОГО САМОУПРАВЛЕНИЯ Г. МАГНИТОГОРСКА "МАГНИТНЫЙ"',
      price: 800000,
      region: 'Республика Тыва',
      status: 'приступил к экспертизе',
      point: 25.15,
      statusApplication: 0,
      done: true
    },
    {
      id: 1,
      number: '19-2-000189',
      name: 'Доброе сердце Магнитки',
      description: 'МЕСТНАЯ ОБЩЕСТВЕННАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ТЕРРИТОРИАЛЬНОГО ОБЩЕСТВЕННОГО САМОУПРАВЛЕНИЯ Г. МАГНИТОГОРСКА "МАГНИТНЫЙ"',
      price: 800000,
      region: 'Республика Тыва',
      status: 'приступил к экспертизе',
      point: 25.15,
      statusApplication: 1,
      done: false
    },
    {
      id: 2,
      number: '19-2-000189',
      name: 'Доброе сердце Магнитки',
      description: 'МЕСТНАЯ ОБЩЕСТВЕННАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ТЕРРИТОРИАЛЬНОГО ОБЩЕСТВЕННОГО САМОУПРАВЛЕНИЯ Г. МАГНИТОГОРСКА "МАГНИТНЫЙ"',
      price: 800000,
      region: 'Республика Тыва',
      status: 'приступил к экспертизе',
      point: 25.15,
      statusApplication: 2,
      done: false
    },
  ]

  public sort: SortDescriptor = {
    col: 'id',
    dir: 'asc'
  }

  public type: TableType = 'default'

  public headerSettings: HeaderSettings = {
    type: 'default',
    sort: true,
    count: true,
    toggle: true,
    background: false,
    substrate: true
  }

  public paginatorSettings: PaginatorSettings = {
    substrate: true
  }

  public contentSettings: ContentSettings = {
    substrate: true
  }

  public totalSteps = 24
  public currentStep = 20

  public tabs = [
    {
      id: 0,
      title: 'Первый',
      active: true
    },
    {
      id: 1,
      title: 'Второй',
      active: false
    },
    {
      id: 2,
      title: 'Третий',
      active: false
    }
  ]

  public firstProgressValue = 50
  public secondProgressValue = 20

  onTabClick(tabIndex: number) {
    this.tabs.forEach(tab => {
      tab.active = false

      if (tab.id === tabIndex) {
        tab.active = true
      }
    })
  }

  changeFirstValue() {
    this.firstProgressValue = Math.floor(Math.random() * 100)
  }

  changeSecondValue() {
    this.secondProgressValue = Math.floor(Math.random() * 100)
  }

  changeTypeTable(type: TableType) {
    this.type = type
  }
}
