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

export interface Catalog {
    // Definir las propiedades de Catalog según sea necesario
}
