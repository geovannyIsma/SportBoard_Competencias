import { User } from './user.model';
import { Planning } from './planning.model';
import { Registration } from './registration.model';
import { Team } from './team.model';

export interface Squad {
    id: number;
    season: Planning;
    team: Team;
    players: User[];
    coaches: User[];
    registrations: Registration[];
}