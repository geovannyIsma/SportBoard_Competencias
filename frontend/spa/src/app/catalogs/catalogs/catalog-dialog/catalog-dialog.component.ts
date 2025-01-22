import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Catalog, CatalogFormValidators } from '../../../models/catalogs/catalog.model';
import { GroupService } from '../../../services/catalogs/group.service';

@Component({
    selector: 'app-catalog-dialog',
    templateUrl: './catalog-dialog.component.html',
    styleUrls: ['./catalog-dialog.component.scss'],
    standalone: false,
})
export class CatalogDialogComponent implements OnInit {
    catalogForm: FormGroup;
    allGroups: any[] = [];

    constructor(
        private fb: FormBuilder,
        private groupService: GroupService,
        public dialogRef: MatDialogRef<CatalogDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Catalog
    ) {
        this.catalogForm = this.fb.group({
            name: ['', CatalogFormValidators.name],
            group: ['', CatalogFormValidators.group],
            description: [''],
            version: [0, CatalogFormValidators.version],
            isActive: [true, CatalogFormValidators.isActive],
            code: [''],
            groupCode: [''] // Nuevo campo agregado
        });
    }

    ngOnInit(): void {
        this.groupService.getAllGroups().subscribe(groups => {
            this.allGroups = groups;
            if (this.data) {
                this.catalogForm.patchValue(this.data);
                this.catalogForm.get('group')?.setValue(this.data.group?.code); // Cargar el valor del grupo
                this.catalogForm.get('groupCode')?.setValue(this.data.groupCode); // Cargar el valor del groupCode
            }
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSaveClick(): void {
        const formValue = this.catalogForm.value;
        formValue.group = this.allGroups.find(group => group.code === formValue.group);
        this.dialogRef.close(formValue);
    }
}
