import { Validators } from '@angular/forms';

export interface Group {
    name: string;
    code: string;
    parentCode?: string;
    parent?: Group;
    children?: Group[];
    catalogList?: Catalog[];
    description?: string;
    isActive: boolean;
    version: number;
}

export const GroupValidators = {
    name: [Validators.required],
    code: [Validators.required],
    isActive: [Validators.required],
    version: [Validators.required, Validators.min(0)]
};

export interface Catalog {
    // Definir las propiedades de Catalog según sea necesario
}
