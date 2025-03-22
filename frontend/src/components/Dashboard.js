import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/EmployeeService";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    // 📊 Total Employees
    const totalEmployees = employees.length;

    // 📊 Employees by Department (Pie Chart)
    const departmentCounts = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {});

    const departmentData = {
        labels: Object.keys(departmentCounts),
        datasets: [
            {
                label: "Employees by Department",
                data: Object.values(departmentCounts),
                backgroundColor: ["#60c860", "#4caf50", "#388e3c", "#1b5e20"],
            },
        ],
    };

    // 📊 Employee Growth Trend (Line Chart)
    const growthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Employee Growth",
                data: [3, 5, 9, 15, 20, 25, 32, 40, 45, 50, 60, totalEmployees], // Example growth data
                borderColor: "#60c860",
                fill: false,
            },
        ],
    };

    // 📌 Recently Added Employees
    const recentEmployees = employees.slice(-5);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">📊 Employee Management Dashboard</h2>

            <div className="dashboard-stats">
                <div className="card total-employees">
                    <h3>Total Employees</h3>
                    <p>{totalEmployees}</p>
                </div>

                <div className="card avg-tenure">
                    <h3>Avg. Tenure</h3>
                    <p>3.5 Years</p> {/* Placeholder Value */}
                </div>
            </div>

            <div className="charts">
                <div className="chart">
                    <h3>Employees by Department</h3>
                    <Pie data={departmentData} />
                </div>

                <div className="chart">
                    <h3>Employee Growth Trend</h3>
                    <Line data={growthData} />
                </div>
            </div>

            <div className="recent-employees">
                <h3>Recently Added Employees</h3>
                <ul>
                    {recentEmployees.map((emp) => (
                        <li key={emp.id}>{emp.name} - {emp.department}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
