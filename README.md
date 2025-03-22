Employee Management System (EMS) 🏢

A full-stack web application for managing employee records efficiently, built using React (frontend) & Spring Boot (backend) with SQLite database.

🚀 Features

Frontend (React)

✅ Stylish Dashboard with charts 📊

✅ Employee List with Add, Edit, Delete functions

✅ Export Employee data as PDF, Excel & Print

✅ Fully responsive UI with modern styling 🎨

✅ Role-based access (future update 🔜)

Backend (Spring Boot & SQLite)

✅ RESTful API using Spring Boot 🌟

✅ SQLite database for lightweight storage

✅ JPA/Hibernate integration for easy data management

✅ Secure CRUD operations for Employee records

🛠️ Tech Stack

Frontend

React.js ⚛️

React Router 🛤️

Chart.js 📊 (for Dashboard analytics)

jsPDF & XLSX 📄 (for Exporting Data)

Bootstrap & Custom CSS 🎨

Backend

Java 11 ☕

Spring Boot 🏗️

Spring Data JPA 📦

SQLite Database 🗄️

📂 Project Structure

bash

Copy

Edit

/ems

 ├── /frontend  (React App)
 
 │    ├── /src
 
 │    │    ├── /components
 
 │    │    │    ├── Dashboard.js
 
 │    │    │    ├── EmployeeList.js
 
 │    │    │    ├── AddEmployee.js
 
 │    │    │    ├── EditEmployee.js
 
 │    │    │    ├── Header.js
 
 │    │    │    ├── Footer.js
 
 │    │    ├── /styles
 
 │    │    ├── App.js
 
 │    │    ├── index.js
 
 │    ├── package.json
 
 │    ├── README.md
 
 │
 
 ├── /backend (Spring Boot API)
 
 │    ├── /src/main/java/com/example/ems
 
 │    │    ├── /controller
 
 │    │    │    ├── EmployeeController.java
 
 │    │    ├── /model
 
 │    │    │    ├── Employee.java
 
 │    │    ├── /repository
 
 │    │    │    ├── EmployeeRepository.java
 
 │    │    ├── /service
 
 │    │    │    ├── EmployeeService.java
 
 │    │    ├── EmsBackendApplication.java
 
 │    ├── pom.xml
 
 │    ├── README.md

⚡ Installation Guide

Frontend Setup

sh

Copy

Edit

cd frontend

npm install

npm start

Runs the React development server at http://localhost:3000

Backend Setup

sh

Copy

Edit

cd backend

mvn clean install

mvn spring-boot:run

Runs the Spring Boot API at http://localhost:8080

🔗 API Endpoints

Method	Endpoint	Description

GET	/employees	Fetch all employees

POST	/employees	Add new employee

GET	/employees/{id}	Get specific employee

PUT	/employees/{id}	Update employee

DELETE	/employees/{id}	Remove employee

📜 License

This project is open-source under the MIT License.

🌟 Contribute

🙌 Contributions are welcome! If you’d like to improve the system, submit a Pull Request or open an Issue.

👨‍💻 Author

Developed by Piyush Mangalam Bajaj

📧 Email: pmbajaj999@gmail.com

💼 LinkedIn: www.linkedin.com/in/piyush-mangalam-bajaj-6a995a236

This Employee Management System makes managing employee records easy and efficient! 🚀🎉

Happy Coding! 😃
