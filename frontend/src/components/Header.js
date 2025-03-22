import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Employee Management System</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/employees">Employee List</Link> {/* 🔗 New Link to Employee List */}
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    );
};

export default Header;
