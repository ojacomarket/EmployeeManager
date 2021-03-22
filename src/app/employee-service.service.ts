import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employees} from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private BACKEND_SERVER_URL = '';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.BACKEND_SERVER_URL}/employee`);
  }
  public addEmployees(employee: Employees): Observable<Employees> {
    return this.http.post<Employees>(`${this.BACKEND_SERVER_URL}/employee/add`, employee);
  }
  public updateEmployees(employee: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.BACKEND_SERVER_URL}/employee/update`, employee);
  }
}
