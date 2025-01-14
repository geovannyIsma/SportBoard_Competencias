import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        ConfirmationDialogComponent,
        FlashMessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        MatIconModule // Asegúrate de importar MatIconModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        ConfirmationDialogComponent, // Exporta el componente de confirmación
        FlashMessageComponent
    ]
})
export class SharedModule {}
