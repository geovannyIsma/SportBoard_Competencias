import { Squad } from './squad.model';
import { User } from './user.model';

export interface PlayerAssignment {
    id: number;
    squad: Squad;
    player: User;
}