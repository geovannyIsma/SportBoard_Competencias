import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/competencies/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = environment.services.competencies.endpoints.users;

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}${id}/`);
    }

    createUser(userData: any): Observable<User> {
        return this.http.post<User>(this.apiUrl, userData);
    }

    updateUser(id: number, user: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}${id}/`, user);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${id}/`);
    }

    getAdminUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}?role=Coach`); //En un futuro, se puede cambiar a 'Admin'
    }
}
