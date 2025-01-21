import { FormatCatalog } from './format-catalog.model';

export interface Competence {
    id: number;
    name: string;
    description: string;
    logo: string;  // Change to a string
    competence_format: FormatCatalog;
}