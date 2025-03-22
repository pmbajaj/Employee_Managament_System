import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to Employee Management System</h1>
                <p>Manage your employees efficiently with our powerful tools.</p>
                <Link to="/add" className="btn-primary">Add Employee</Link>
            </div>

            <div className="feature-section">
                <h2>Features</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>View Employees</h3>
                        <p>Check the list of employees and their details.</p>
                        <Link to="/employees" className="btn-secondary">View</Link>
                    </div>

                    <div className="card">
                        <h3>Add Employees</h3>
                        <p>Add new employees with ease using our user-friendly form.</p>
                        <Link to="/add" className="btn-secondary">Add</Link>
                    </div>

                    <div className="card">
                        <h3>Edit Employees</h3>
                        <p>Modify employee details as required.</p>
                        <Link to="/edit/1" className="btn-secondary">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
