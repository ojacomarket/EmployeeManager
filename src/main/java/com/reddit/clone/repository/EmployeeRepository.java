package com.reddit.clone.repository;

import com.reddit.clone.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * JpaRepository<Entity, Primary Key data type>
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
