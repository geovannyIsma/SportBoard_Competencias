import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { SorteoComponent } from './sorteo/sorteo.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    SorteoComponent
  ],
  exports: [SorteoComponent]
})
export class CalendarioModule { }
