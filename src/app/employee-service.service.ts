import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private const BACKEND_SERVER_URL = '';

  constructor(private http: HttpClient) { }
}
