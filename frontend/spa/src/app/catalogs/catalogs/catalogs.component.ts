import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CatalogService } from '../../services/catalogs/catalog.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component'; // Importar BreadcrumbComponent
import { Catalog } from '../../models/catalogs/catalog.model';
import { MatTableDataSource } from '@angular/material/table'; // Importar MatTableDataSource
import { MatPaginator } from '@angular/material/paginator'; // Importar MatPaginator
import { MatSort } from '@angular/material/sort'; // Importar MatSort

@Component({
    selector: 'app-catalogs',
    templateUrl: './catalogs.component.html',
    styleUrl: './catalogs.component.scss',
    standalone: false,
})
export class CatalogsComponent implements OnInit, AfterViewInit {
    breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Catalogs', url: '/catalogos' },
        { label: 'Catálogos', url: '/catalogos/catalogs/' }
    ];
    displayedColumns: string[] = ['name', 'group', 'description', 'version', 'isActive'];
    dataSource = new MatTableDataSource<Catalog>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private catalogService: CatalogService) {}

    ngOnInit(): void {
        this.loadCatalogs();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    loadCatalogs(): void {
        this.catalogService.getCatalogs().subscribe((data: Catalog[]) => {
            this.dataSource.data = data;
        });
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
