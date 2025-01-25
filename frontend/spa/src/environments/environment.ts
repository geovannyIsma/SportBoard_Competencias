// src/environments/environment.ts
export const environment = {
    production: false,
    protocol: 'http',
    baseUrl: 'localhost',
    port: 8000,
    suffix: '', // '/api',
    apiUrl: '',
    services: {
        catalog: {
            base: '/catalog',
            endpoints: {
                groups: '/groups',
                catalogs: '/catalogs',
            },
        },
        competencies: {
            base: '/api',
            endpoints: {
                root: '',
                staticFiles: '/static',
                users: '/users',
                playerAssignments: '/player-assignments',
                coachAssignments: '/coach-assignments',
                matches: '/matches',
                plannings: '/plannings',
                squads: '/squads',
                registrations: '/registrations',
                competences: 'http://localhost:8000/api/competences',
                ruleCompetences: '/rule-competences',
                ruleDisciplines: 'http://localhost:8000/api/rule-disciplines',
                disciplines: '/disciplines',
                competenceEditions: '/competence-editions',
                stages: '/stages',
                teams: '/teams',
                localities: '/localities',
                disciplineCatalogs: '/discipline-catalogs',
                logoCatalogs: '/logo-catalogs',
                logoItems: '/logo-items',
                countryCatalogs: '/country-catalogs',
                countryItems: '/country-items',
                formatCatalogs: '/format-catalogs',
                formatItems: '/format-items',
            },
        },
    },
};

environment.apiUrl = `${environment.protocol}://${environment.baseUrl}:${environment.port}${environment.suffix}`;

// ms6-catalog
environment.services.catalog.base = `${environment.apiUrl}${environment.services.catalog.base}`;
environment.services.catalog.endpoints.groups = `${environment.services.catalog.base}${environment.services.catalog.endpoints.groups}`;
environment.services.catalog.endpoints.catalogs = `${environment.services.catalog.base}${environment.services.catalog.endpoints.catalogs}`;

// ms2-competencies
environment.services.competencies.base = `${environment.apiUrl}${environment.services.competencies.base}`;
environment.services.competencies.endpoints.root = `${environment.services.competencies.base}${environment.services.competencies.endpoints.root}`;
environment.services.competencies.endpoints.staticFiles = `${environment.services.competencies.base}${environment.services.competencies.endpoints.staticFiles}`;
environment.services.competencies.endpoints.users = `${environment.services.competencies.base}${environment.services.competencies.endpoints.users}`;
environment.services.competencies.endpoints.playerAssignments = `${environment.services.competencies.base}${environment.services.competencies.endpoints.playerAssignments}`;
environment.services.competencies.endpoints.coachAssignments = `${environment.services.competencies.base}${environment.services.competencies.endpoints.coachAssignments}`;
environment.services.competencies.endpoints.matches = `${environment.services.competencies.base}${environment.services.competencies.endpoints.matches}`;
environment.services.competencies.endpoints.plannings = `${environment.services.competencies.base}${environment.services.competencies.endpoints.plannings}`;
environment.services.competencies.endpoints.squads = `${environment.services.competencies.base}${environment.services.competencies.endpoints.squads}`;
environment.services.competencies.endpoints.registrations = `${environment.services.competencies.base}${environment.services.competencies.endpoints.registrations}`;
environment.services.competencies.endpoints.competences = 'http://localhost:8000/api/competences/';
environment.services.competencies.endpoints.ruleCompetences = `${environment.services.competencies.base}${environment.services.competencies.endpoints.ruleCompetences}`;
environment.services.competencies.endpoints.ruleDisciplines = 'http://localhost:8000/api/rule-disciplines/';
environment.services.competencies.endpoints.disciplines = `${environment.services.competencies.base}${environment.services.competencies.endpoints.disciplines}`;
environment.services.competencies.endpoints.competenceEditions = `${environment.services.competencies.base}${environment.services.competencies.endpoints.competenceEditions}`;
environment.services.competencies.endpoints.stages = `${environment.services.competencies.base}${environment.services.competencies.endpoints.stages}`;
environment.services.competencies.endpoints.teams = `${environment.services.competencies.base}${environment.services.competencies.endpoints.teams}`;
environment.services.competencies.endpoints.localities = `${environment.services.competencies.base}${environment.services.competencies.endpoints.localities}`;
environment.services.competencies.endpoints.disciplineCatalogs = `${environment.services.competencies.base}${environment.services.competencies.endpoints.disciplineCatalogs}`;
environment.services.competencies.endpoints.logoCatalogs = `${environment.services.competencies.base}${environment.services.competencies.endpoints.logoCatalogs}`;
environment.services.competencies.endpoints.logoItems = `${environment.services.competencies.base}${environment.services.competencies.endpoints.logoItems}`;
environment.services.competencies.endpoints.countryCatalogs = `${environment.services.competencies.base}${environment.services.competencies.endpoints.countryCatalogs}`;
environment.services.competencies.endpoints.countryItems = `${environment.services.competencies.base}${environment.services.competencies.endpoints.countryItems}`;
environment.services.competencies.endpoints.formatCatalogs = `${environment.services.competencies.base}${environment.services.competencies.endpoints.formatCatalogs}`;
environment.services.competencies.endpoints.formatItems = `${environment.services.competencies.base}${environment.services.competencies.endpoints.formatItems}`;
