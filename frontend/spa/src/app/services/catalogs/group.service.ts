import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Group } from '../../models/catalogs/group.model';

@Injectable({
    providedIn: 'root',
})
export class GroupService {
    private baseUrl = environment.services.catalog.endpoints.groups;

    constructor(private http: HttpClient) {}

    getAllGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.baseUrl);
    }

    getGroupById(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.baseUrl}/${id}`);
    }

    createGroup(group: Group): Observable<Group> {
        return this.http.post<Group>(this.baseUrl, group);
    }

    updateGroup(id: string, group: Group): Observable<Group> {
        return this.http.put<Group>(`${this.baseUrl}/${id}`, group);
    }

    deleteGroup(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
