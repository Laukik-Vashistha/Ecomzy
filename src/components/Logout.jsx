// src/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import the CSS file

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
        navigate('/login'); // Navigate to login page after logout
    };

    return (
        <div className="logout-container">
            <div className="logout-form">
                <h2>Logout</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;
