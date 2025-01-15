import { Group } from './group.model';

export interface Catalog {
    id: number;
    name: string;
    description: string;
    code: string;
    isActive: boolean;
    version: number;
    idCatalog: number;
    parent: string;
    children: string[];
    groupCode: string;
    group: Group;
}
