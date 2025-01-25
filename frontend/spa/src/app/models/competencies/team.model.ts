import { CountryCatalog } from './country-catalog.model';
import { Squad } from './squad.model';

export interface Team {
    name: string;
    country: CountryCatalog;
    logo: string;
    squads: Squad[];
}