import { Component, Input, OnInit, Type } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent<T> implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource = new MatTableDataSource<T>();
  @Input() refreshTable!: () => void;
  @Input() dialogComponent!: Type<any>;

  selectedItem: T | null = null;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  selectItem(item: T): void {
    this.selectedItem = item;
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(this.dialogComponent, {
      width: '400px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  openEditDialog(): void {
    if (!this.selectedItem) return;
    const dialogRef = this.dialog.open(this.dialogComponent, {
      width: '400px',
      data: { mode: 'edit', item: this.selectedItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }

  openDeleteDialog(): void {
    if (!this.selectedItem) return;
    const dialogRef = this.dialog.open(this.dialogComponent, {
      width: '400px',
      data: { mode: 'delete', item: this.selectedItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshTable();
      }
    });
  }
}
