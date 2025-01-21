import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CountryItem } from '../../models/competencies/country-item.model';

@Injectable({
    providedIn: 'root'
})
export class CountryItemService {
    private apiUrl = environment.services.competencies.endpoints.countryItems;

    constructor(private http: HttpClient) {}

    getCountryItems(): Observable<CountryItem[]> {
        return this.http.get<CountryItem[]>(this.apiUrl);
    }

    getCountryItem(id: number): Observable<CountryItem> {
        return this.http.get<CountryItem>(`${this.apiUrl}/${id}`);
    }

    createCountryItem(countryItem: CountryItem): Observable<CountryItem> {
        return this.http.post<CountryItem>(this.apiUrl, countryItem);
    }

    updateCountryItem(id: number, countryItem: CountryItem): Observable<CountryItem> {
        return this.http.put<CountryItem>(`${this.apiUrl}/${id}`, countryItem);
    }

    deleteCountryItem(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
