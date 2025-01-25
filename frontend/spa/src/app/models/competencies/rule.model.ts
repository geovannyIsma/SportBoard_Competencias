import { User } from './user.model';

export interface Rule {
    numeration: number;
    rule_description: string;
    actor: string;
    action: string;
    type_rule: string;
}
