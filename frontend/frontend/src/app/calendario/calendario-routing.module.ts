import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteoComponent } from './sorteo/sorteo.component'; // Componente de sorteo
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [  
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'sorteo',
    component: SorteoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
