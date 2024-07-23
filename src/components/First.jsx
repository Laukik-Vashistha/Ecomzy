// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './First.css'; // Import the CSS file
import pic from './pic.jpeg'; // Import the image

const First = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to GreenShop</h1>
                <p >
                    Discover the best products at unbeatable prices. Shop now and enjoy amazing deals and discounts.
                    Our platform offers a wide range of products to suit all your needs. Join us today and start your shopping journey!
                </p>
                <div className="home-buttons">
                    <button className="home-button" onClick={() => navigate('/login')}>Login</button>
                    <button className="home-button" onClick={() => navigate('/signup')}>Signup</button>
                </div>
            </div>
            <div className="home-image">
                <img src={pic} alt="E-commerce" width="400px" />
            </div>
        </div>
    );
};

export default First;
