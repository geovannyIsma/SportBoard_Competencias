import { CountryCatalog } from './country-catalog.model';

export interface CountryItem {
    id: number;
    country_name: string;
    catalog: CountryCatalog;
}
