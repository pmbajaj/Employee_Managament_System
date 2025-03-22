import React, { useState } from "react";
import { addEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEmployee(employee);
        navigate("/employees");
    };

    return (
        <div className="add-employee-container">
            <h2>Add New Employee</h2>
            <form className="add-employee-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn-add">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
