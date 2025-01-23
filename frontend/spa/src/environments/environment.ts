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
    },
};

environment.apiUrl = `${environment.protocol}://${environment.baseUrl}:${environment.port}${environment.suffix}`;

// ms6-catalog
environment.services.catalog.base = `${environment.apiUrl}${environment.services.catalog.base}`;
environment.services.catalog.endpoints.groups = `${environment.services.catalog.base}${environment.services.catalog.endpoints.groups}`;
environment.services.catalog.endpoints.catalogs = `${environment.services.catalog.base}${environment.services.catalog.endpoints.catalogs}`;
