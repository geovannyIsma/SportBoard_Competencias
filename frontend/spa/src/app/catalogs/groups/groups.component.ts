import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Group } from '../../models/catalogs/group.model';
import { GroupService } from '../../services/catalogs/group.service';
import { GroupDialogComponent } from './group-dialog/group-dialog.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    groups: Group[] = [];
    dataSource = new MatTableDataSource<Group>();
    displayedColumns: string[] = ['code', 'name', 'parentCode', 'actions'];
    @ViewChild('addButton') addButton!: ElementRef<HTMLButtonElement>;

    constructor(private groupService: GroupService, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.loadGroups();
    }

    loadGroups(): void {
        this.groupService.getAllGroups().subscribe((data: Group[]) => {
            this.groups = data;
            this.dataSource.data = this.groups;
        });
    }

    openDialog(group?: Group): void {
        const dialogRef = this.dialog.open(GroupDialogComponent, {
            width: '350px',
            data: group ? { ...group } : { code: '', name: '', parentCode: '', description: '', isActive: true, version: 0 },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                if (result.code) {
                    this.groupService
                        .updateGroup(result.code, result)
                        .subscribe(() => this.loadGroups());
                } else {
                    this.groupService
                        .createGroup(result)
                        .subscribe(() => this.loadGroups());
                }
            }
        });
    }

    selectGroup(group: Group): void {
        this.openDialog(group);
    }

    deleteGroup(code: string): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '250px',
            data: { message: '¿Estás seguro de que deseas eliminar este grupo?' },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.groupService.deleteGroup(code).subscribe(() => this.loadGroups());
            }
        });
    }
}
