import { Group } from './group.model';
import { Validators } from '@angular/forms';

export interface Catalog {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    version: number;
    idCatalog: number;
    parent: string;
    children: string[];
    group: Group;
    code: string; // Nuevo campo agregado
    groupCode: string; // Nuevo campo agregado
}

// Validadores para el formulario de Catalog
export const CatalogFormValidators = {
    name: [Validators.required],
    group: [Validators.required],
    description: [],
    version: [Validators.required, Validators.min(0)],
    isActive: [Validators.required],
    code: [] // No es obligatorio
};
