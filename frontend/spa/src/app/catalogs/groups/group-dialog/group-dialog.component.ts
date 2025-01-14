import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from '../../../models/catalogs/group.model';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss'],
    standalone: false
})
export class GroupDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<GroupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Group
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
