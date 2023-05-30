import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './development.component';
import { MyrtexLibModule } from 'myrtex-lib';
import { AlertComponent } from '../../components/alert/alert.component';
import { DatetimeComponent } from '../../components/datetime/datetime.component';
import { TableComponent } from '../../components/table/table.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { SwitchComponent } from '../../components/switch/switch.component';
import { LabelComponent } from '../../components/label/label.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { InputTextareaComponent } from '../../components/input-textarea/input-textarea.component';
import { EditorComponent } from '../../components/editor/editor.component';
import { SelectComponent } from '../../components/select/select.component';
import { LinkComponent } from '../../components/link/link.component';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { InputNumberComponent } from '../../components/input-number/input-number.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { CharsComponent } from '../../components/chars/chars.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { RadioComponent } from '../../components/radio/radio.component';
import { MfDatetimeComponent } from "../../components/myrtex-mf-ui/mf-datetime/mf-datetime.component";
import { DateFormatModule, InputDateTimeModule } from "myrtex-mf-ui";


@NgModule({
  declarations: [
    DevelopmentComponent,
    AlertComponent,
    DatetimeComponent,
    TableComponent,
    ButtonComponent,
    CheckboxComponent,
    SwitchComponent,
    LabelComponent,
    ErrorMessageComponent,
    InputTextComponent,
    InputTextareaComponent,
    EditorComponent,
    SelectComponent,
    LinkComponent,
    InputSearchComponent,
    InputNumberComponent,
    BreadcrumbsComponent,
    LoaderComponent,
    BadgeComponent,
    CharsComponent,
    TabsComponent,
    ProgressComponent,
    StepperComponent,
    RadioComponent,
    MfDatetimeComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule,
    FormsModule,
    MyrtexLibModule,
    InputDateTimeModule,
    DateFormatModule
  ]
})
export class DevelopmentModule {}
