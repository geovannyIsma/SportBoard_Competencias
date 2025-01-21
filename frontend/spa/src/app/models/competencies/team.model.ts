import { CountryCatalog } from './country-catalog.model';
import { Squad } from './squad.model';

export interface Team {
    id: number;
    name: string;
    country: CountryCatalog;
    logo: string;  // Change to a string
    squads: Squad[];
}