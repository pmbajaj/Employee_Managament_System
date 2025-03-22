package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // ✅ Enables Spring Boot features
public class EmsBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(EmsBackendApplication.class, args);
        System.out.println("🚀 Employee Management System Backend is Running...");
    }
}
