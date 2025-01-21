import { LogoCatalog } from './logo-catalog.model';

export interface LogoItem {
    id: number;
    logo: string;
    logo_catalog: LogoCatalog;
}
