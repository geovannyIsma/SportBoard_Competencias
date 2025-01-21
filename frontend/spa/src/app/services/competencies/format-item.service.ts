import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FormatItem } from '../../models/competencies/format-item.model';

@Injectable({
    providedIn: 'root'
})
export class FormatItemService {
    private apiUrl = environment.services.competencies.endpoints.formatItems;

    constructor(private http: HttpClient) {}

    getFormatItems(): Observable<FormatItem[]> {
        return this.http.get<FormatItem[]>(this.apiUrl);
    }

    getFormatItem(id: number): Observable<FormatItem> {
        return this.http.get<FormatItem>(`${this.apiUrl}/${id}`);
    }

    createFormatItem(formatItem: FormatItem): Observable<FormatItem> {
        return this.http.post<FormatItem>(this.apiUrl, formatItem);
    }

    updateFormatItem(id: number, formatItem: FormatItem): Observable<FormatItem> {
        return this.http.put<FormatItem>(`${this.apiUrl}/${id}`, formatItem);
    }

    deleteFormatItem(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
