import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalogs/catalog.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component'; // Importar BreadcrumbComponent
import { Catalog } from '../../models/catalogs/catalog.model';

@Component({
    selector: 'app-catalogs',
    templateUrl: './catalogs.component.html',
    styleUrl: './catalogs.component.scss',
    standalone: false,
})
export class CatalogsComponent implements OnInit {
    breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Catalogs', url: '/catalogos' },
        { label: 'Catálogos', url: '/catalogos/catalogs/' }
    ];
    catalogs: Catalog[] = [];

    constructor(private catalogService: CatalogService) {}

    ngOnInit(): void {
        this.loadCatalogs();
    }

    loadCatalogs(): void {
        this.catalogService.getCatalogs().subscribe((data: Catalog[]) => {
            this.catalogs = data;
        });
    }
}
