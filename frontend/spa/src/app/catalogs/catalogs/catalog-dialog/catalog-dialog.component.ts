import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-catalog-dialog',
    templateUrl: './catalog-dialog.component.html',
    styleUrls: ['./catalog-dialog.component.scss'],
    standalone: false,
})
export class CatalogDialogComponent implements OnInit {
    catalogForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<CatalogDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder
    ) {
        this.catalogForm = this.fb.group({
            name: [data.name, Validators.required],
            group: [data.group, Validators.required],
            description: [data.description],
            version: [data.version, [Validators.required, Validators.min(0)]],
            isActive: [data.isActive, Validators.required]
        });
    }

    ngOnInit(): void {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
