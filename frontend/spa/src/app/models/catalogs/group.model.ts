export interface Group {
    id: number;
    name: string;
    code: string;
    parentCode?: string;
    parent?: Group;
    children?: Group[];
    catalogList?: Catalog[];
}

export interface Catalog {
    // Definir las propiedades de Catalog según sea necesario
}
