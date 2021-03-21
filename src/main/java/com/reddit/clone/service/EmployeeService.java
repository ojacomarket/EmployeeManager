package com.reddit.clone.service;

import com.reddit.clone.model.Employee;
import com.reddit.clone.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee addNewEmployee (Employee employeeToBeAddedIntoDb) {
        employeeToBeAddedIntoDb.setEmployeeCode(UUID.randomUUID().toString());
        employeeRepository.save(employeeToBeAddedIntoDb);
        return employeeToBeAddedIntoDb;
    }
    public List<Employee> findAllEmployees () {
        return employeeRepository.findAll();
    }
}
