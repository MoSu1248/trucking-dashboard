import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost:3000/api/auth/register';

  constructor(private http: HttpClient) {}

  registerStaffMember(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
