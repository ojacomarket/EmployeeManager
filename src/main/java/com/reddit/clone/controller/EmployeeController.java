package com.reddit.clone.controller;

import com.reddit.clone.model.Employee;
import com.reddit.clone.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@AllArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> existingEmployees = employeeService.findAllEmployees();
        return new ResponseEntity<List<Employee>>(existingEmployees, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getSingleEmployee(@PathVariable("id") Long id) {
        Employee singleEmployee = employeeService.findEmployeeById(id);
        return new ResponseEntity<Employee>(singleEmployee,HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Employee> addNewEmployee (@RequestBody Employee employeeJSON) {
        Employee freshEmployee = employeeService.addNewEmployee(employeeJSON);
        return new ResponseEntity<Employee>(freshEmployee, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Employee> updateExistingEmployee (@RequestBody Employee employeeJSON) {
        Employee existingEmployee = employeeService.updateEmployee(employeeJSON);
        return new ResponseEntity<Employee>(existingEmployee, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteExistingEmployee (@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
    }

}
