import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; // Cambia esto a la URL de tu API


  constructor(private http: HttpClient) { }


  getLocalities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/localities/`);
  }

  createLocality(locality: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/localities/`, locality);
  }

  getPlannings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plannings/`);
  }

  createPlanning(planning: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plannings/`, planning);
  }
}