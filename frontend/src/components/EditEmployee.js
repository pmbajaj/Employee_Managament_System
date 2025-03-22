import React, { useEffect, useState } from "react";
import { updateEmployee, getEmployees } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import "./EditEmployee.css";

const EditEmployee = () => {
    const { id } = useParams();
    const [employees, setEmployees] = useState([]);
    const [selectedId, setSelectedId] = useState(id || ""); 
    const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
            if (id) {
                const emp = data.find(emp => emp.id === parseInt(id));
                setEmployee(emp || { name: "", email: "", department: "" });
            }
        };
        fetchEmployees();
    }, [id]);

    const handleEmployeeSelect = (e) => {
        const selectedEmployeeId = e.target.value;
        setSelectedId(selectedEmployeeId);
        const emp = employees.find(emp => emp.id === parseInt(selectedEmployeeId));
        setEmployee(emp || { name: "", email: "", department: "" });
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedId) {
            await updateEmployee(selectedId, employee);
            navigate("/employees");
        }
    };

    return (
        <div className="edit-employee-container">
            <h2>Edit Employee</h2>
            
            {/* Employee Selection Dropdown */}
            <select 
                className="employee-select"
                value={selectedId}
                onChange={handleEmployeeSelect}
            >
                <option value="">Select Employee</option>
                {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.department})
                    </option>
                ))}
            </select>

            {selectedId && (
                <form className="edit-employee-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            value={employee.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            value={employee.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="department" 
                            placeholder="Department" 
                            value={employee.department} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn-update">Update Employee</button>
                </form>
            )}
        </div>
    );
};

export default EditEmployee;
