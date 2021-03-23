import {Component, OnInit} from '@angular/core';
import {Employees} from './employees';
import {EmployeeServiceService} from './employee-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toBeDeletedEmployee: Employees;
  toBeEditedEmployee: Employees;
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

  ngOnInit(): void {
    this.getEmployeesFromService();
  }
  public onEmployeeAddition(incomingFormFromHTML: NgForm): void {
    this.employeeService.addEmployees(incomingFormFromHTML.value).subscribe(
      (responseFromService: Employees) => {
        console.log(responseFromService);
        this.getEmployeesFromService();
        incomingFormFromHTML.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        incomingFormFromHTML.reset();
      });
    document.getElementById('add-employee-form').click();
  }
  public onEmployeeUpdate(existingEmployee: Employees): void {
    this.employeeService.updateEmployees(existingEmployee).subscribe(
      (responseFromService: Employees) => {
        console.log(responseFromService);
        this.getEmployeesFromService();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  public onEmployeeDelete(existingEmployeeId: number): void {
    this.employeeService.deleteEmployees(existingEmployeeId).subscribe(
      (responseFromService: void) => {
        console.log(responseFromService);
        this.getEmployeesFromService();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  onOpenModal(employee: Employees, mode: string): void {
    const containerBlock = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.toBeEditedEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    containerBlock.appendChild(button);
    button.click();
  }
}
