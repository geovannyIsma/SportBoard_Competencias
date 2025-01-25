import { FormatCatalog } from './format-catalog.model';
import { RuleCompetition } from './rule-competence.model';
import { RuleDiscipline } from './rule-discipline.model';

export interface Competence {
    name: string;
    description: string;
    logo: File; // Change to File for file upload
    competence_format: FormatCatalog;
    rule_discipline_list: RuleDiscipline[];
    rule_list: RuleCompetition[];
}
