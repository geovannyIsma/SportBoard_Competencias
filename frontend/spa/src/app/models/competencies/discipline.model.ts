import { RuleDiscipline } from './rule-discipline.model';

export interface Discipline {
    id: number;
    name: string;
    surface: string;
    federation: string;
    rule_list: RuleDiscipline[];
}