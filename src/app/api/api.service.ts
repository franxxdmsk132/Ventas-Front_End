import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/persons'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getPersons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`);
  }

}
