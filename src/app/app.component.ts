import { Component } from '@angular/core';
import {Employees} from './employees';
import {EmployeeServiceService} from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeesFromBackend: Employees[];
  constructor(private employeeService: EmployeeServiceService) {
  }
}
