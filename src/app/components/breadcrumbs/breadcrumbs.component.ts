import { Component } from '@angular/core';
import { BreadcrumbsItemI } from "myrtex-lib/lib/components/breadcrumbs/breadcrumbs.enum";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {

  public item: BreadcrumbsItemI = {
    text: 'Назад',
    path: '/',
    isShowArrow: false
  }

  public itemWithArrow: BreadcrumbsItemI = {
    text: 'Назад',
    path: '/',
    isShowArrow: true
  }

  public items: BreadcrumbsItemI[] = [
    {
      text: 'Главная',
      path: '/',
      isLink: true
    },
    {
      text: 'Каталог',
      path: '/',
      isLink: true
    },
    {
      text: 'Продукт'
    },
  ]

}
