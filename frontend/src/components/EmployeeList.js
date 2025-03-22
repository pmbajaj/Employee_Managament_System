import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import "./EmployeeList.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            await deleteEmployee(id);
            fetchEmployees();
        }
    };

    // 📄 Export as PDF
    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text("Employee List", 20, 10);
        autoTable(doc, {
            startY: 20,
            head: [["ID", "Name", "Email", "Department"]],
            body: employees.map(emp => [emp.id, emp.name, emp.email, emp.department]),
        });
        doc.save("Employee_List.pdf");
    };

    // 📊 Export as Excel
    const exportExcel = () => {
        const ws = XLSX.utils.json_to_sheet(employees);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Employees");
        XLSX.writeFile(wb, "Employee_List.xlsx");
    };

    // 🖨 Print Employees
    const printEmployees = () => {
        window.print();
    };

    return (
        <div className="employee-list-container">
            <h2>Employee List</h2>
            
            {/* Button Actions */}
            <div className="button-group">
                <button className="btn export-pdf" onClick={exportPDF}>📄 PDF</button>
                <button className="btn export-excel" onClick={exportExcel}>📊 Excel</button>
                <button className="btn print" onClick={printEmployees}>🖨 Print</button>
                <button className="btn add-employee" onClick={() => navigate("/add")}>➕ Add Employee</button>
            </div>

            {/* Employee Cards */}
            <div className="employee-list">
                {employees.length > 0 ? (
                    employees.map((emp) => (
                        <div key={emp.id} className="employee-card">
                            <h3>{emp.name}</h3>
                            <p><strong>Email:</strong> {emp.email}</p>
                            <p><strong>Department:</strong> {emp.department}</p>
                            <div className="action-buttons">
                                <button className="btn-edit" onClick={() => navigate(`/edit/${emp.id}`)}>✏️ Edit</button>
                                <button className="btn-delete" onClick={() => handleDelete(emp.id)}>❌ Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-employees">No employees found. Add one!</p>
                )}
            </div>
        </div>
    );
};

export default EmployeeList;
