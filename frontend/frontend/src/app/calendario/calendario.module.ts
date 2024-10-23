import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { SorteoComponent } from './sorteo/sorteo.component';
import { MatchtableComponent } from './matchtable/matchtable.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CalendarComponent,
    SorteoComponent,
    MatchtableComponent,
  ],
  exports: [SorteoComponent]
})
export class CalendarioModule { }
