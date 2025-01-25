import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CompetenceService } from '../../services/competencies/competence.service';
import { Competence } from '../../models/competencies/competence.model';
import { CompetenceDialogComponent } from '../dialogs/competence-dialog/competence-dialog.component';
import { CrudTableComponent } from '../crud-table/crud-table.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-administracion-competences',
  standalone: true,
  imports: [CommonModule, CrudTableComponent, MatIconModule, MatButtonModule],
  templateUrl: './administracion-competences.component.html',
  styleUrls: ['./administracion-competences.component.scss']
})
export class AdministracionCompetencesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Competence>();
  dialogComponent = CompetenceDialogComponent;

  constructor(private competenceService: CompetenceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable(): void {
    this.competenceService.getCompetences().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CompetenceDialogComponent, {
      width: '400px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  openEditDialog(item: Competence): void {
    const dialogRef = this.dialog.open(CompetenceDialogComponent, {
      width: '400px',
      data: { mode: 'edit', item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  openDeleteDialog(item: Competence): void {
    const dialogRef = this.dialog.open(CompetenceDialogComponent, {
      width: '400px',
      data: { mode: 'delete', item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }
}
