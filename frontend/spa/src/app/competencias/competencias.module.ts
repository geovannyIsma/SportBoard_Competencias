import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetenciasRoutingModule } from './competencias-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CompetenceService } from '../services/competencies/competence.service';
import { FormatCatalogService } from '../services/competencies/format-catalog.service';
import { FormatItemService } from '../services/competencies/format-item.service';
import { TitleCasePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CompetenceDialogComponent } from './dialogs/competence-dialog/competence-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetenciasRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    DragDropModule,
    CrudTableComponent,
    CompetenceDialogComponent,
  ],
  providers: [CompetenceService, FormatCatalogService, FormatItemService, TitleCasePipe],
})
export class CompetenciasModule { }