package com.example.repository;  // ✅ Make sure this matches the directory structure

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Employee;
import org.springframework.stereotype.Repository;

@Repository  // ✅ Add @Repository annotation
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
