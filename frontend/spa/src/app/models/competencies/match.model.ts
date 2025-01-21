import { Squad } from './squad.model';
import { Locality } from './locality.model';
import { Stage } from './stage.model';

export interface Match {
    id: number;
    home_squad: Squad;
    away_squad: Squad;
    home_goals: number;
    away_goals: number;
    time: string;
    stadium: Locality;
    stage: Stage;
}