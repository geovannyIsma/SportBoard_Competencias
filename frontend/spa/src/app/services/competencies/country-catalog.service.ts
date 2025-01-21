import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CountryCatalog } from '../../models/competencies/country-catalog.model';

@Injectable({
    providedIn: 'root'
})
export class CountryCatalogService {
    private apiUrl = environment.services.competencies.endpoints.countryCatalogs;

    constructor(private http: HttpClient) {}

    getCountryCatalogs(): Observable<CountryCatalog[]> {
        return this.http.get<CountryCatalog[]>(this.apiUrl);
    }

    getCountryCatalog(id: number): Observable<CountryCatalog> {
        return this.http.get<CountryCatalog>(`${this.apiUrl}/${id}`);
    }

    createCountryCatalog(countryCatalog: CountryCatalog): Observable<CountryCatalog> {
        return this.http.post<CountryCatalog>(this.apiUrl, countryCatalog);
    }

    updateCountryCatalog(id: number, countryCatalog: CountryCatalog): Observable<CountryCatalog> {
        return this.http.put<CountryCatalog>(`${this.apiUrl}/${id}`, countryCatalog);
    }

    deleteCountryCatalog(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
