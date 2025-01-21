import { FormatCatalog } from './format-catalog.model';

export interface FormatItem {
    id: number;
    format_name: string;
    catalog: FormatCatalog;
}
