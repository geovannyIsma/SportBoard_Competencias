import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CatalogsComponent,
        GroupsComponent,
        DashboardComponent
    ],
    imports: [CommonModule, CatalogsRoutingModule, SharedModule],
})
export class CatalogsModule {}
