import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterModule, SharedModule, MatMenuModule, MatExpansionModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

    isSidebarOpen = true;

    toggleSidebar(sidenav: any) {
        sidenav.toggle();
    }

}
