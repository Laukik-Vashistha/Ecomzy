import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS file

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot Password:', { email });
        setMessage('If the email is registered, you will receive a password reset link.');
    };

    return (
        <div className="forgot-password-container">
            <form className="forgot-password-form" onSubmit={handleForgotPassword}>
                <h2>Forgot Password</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="forgot-password-button">Send Reset Link</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
