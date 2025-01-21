import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DisciplineCatalog } from '../../models/competencies/discipline-catalog.model';

@Injectable({
    providedIn: 'root'
})
export class DisciplineCatalogService {
    private apiUrl = environment.services.competencies.endpoints.disciplineCatalogs;

    constructor(private http: HttpClient) {}

    getDisciplineCatalogs(): Observable<DisciplineCatalog[]> {
        return this.http.get<DisciplineCatalog[]>(this.apiUrl);
    }

    getDisciplineCatalog(id: number): Observable<DisciplineCatalog> {
        return this.http.get<DisciplineCatalog>(`${this.apiUrl}/${id}`);
    }

    createDisciplineCatalog(disciplineCatalog: DisciplineCatalog): Observable<DisciplineCatalog> {
        return this.http.post<DisciplineCatalog>(this.apiUrl, disciplineCatalog);
    }

    updateDisciplineCatalog(id: number, disciplineCatalog: DisciplineCatalog): Observable<DisciplineCatalog> {
        return this.http.put<DisciplineCatalog>(`${this.apiUrl}/${id}`, disciplineCatalog);
    }

    deleteDisciplineCatalog(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
