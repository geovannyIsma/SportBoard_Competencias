import { User } from './user.model';

export interface Rule {
    id: number;
    numeration: number;
    rule_description: string;
    actor: User;
    action: string;
    type_rule: string;
}
