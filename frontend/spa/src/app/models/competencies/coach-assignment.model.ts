import { Squad } from './squad.model';
import { User } from './user.model';

export interface CoachAssignment {
    id: number;
    squad: Squad;
    coach: User;
}