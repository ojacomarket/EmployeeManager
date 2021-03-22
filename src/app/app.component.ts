import { Component } from '@angular/core';
import {Employees} from './employees';
import {EmployeeServiceService} from './employee-service.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeesFromBackend: Employees[];
  constructor(private employeeService: EmployeeServiceService) {
  }
  public getEmployeesFromService(): void {
    this.employeeService.getEmployees().subscribe((listOfEmployeesAsHttpResponse: Employees[]) => {
      this.employeesFromBackend = listOfEmployeesAsHttpResponse;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
