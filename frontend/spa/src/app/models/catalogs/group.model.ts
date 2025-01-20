import { Validators } from "@angular/forms";
import { Catalog } from "./catalog.model";

export interface Group {
    // id: number; // Eliminado porque code es la llave principal
    name: string;
    code: string;
    parentCode?: string;
    parent?: Group;
    children?: Group[];
    catalogList?: Catalog[];
    description?: string;
    isActive?: boolean;
    version?: number;
}

export const GroupValidators = {
    name: [Validators.required],
    code: [Validators.required],
    isActive: [Validators.required],
    version: [Validators.required, Validators.min(0)]
};

export interface Group {
    // Definir las propiedades de Catalog según sea necesario
}
