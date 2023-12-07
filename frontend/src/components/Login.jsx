import React, { useState, useEffect } from 'react';
import './styles/Login.css';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('sessionToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
 
        if (!username || !password) {
            setError('Por favor, rellena todos los campos.');
            return;
        }
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password })
        };
    
        try {
            const response = await fetch('http://localhost:3000/login', requestOptions);
            const data = await response.json();
    
            if (data.success) {
                console.log(data); 
                localStorage.setItem('sessionToken', data.token);
                setIsLoggedIn(true);
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error); 
        }
    };
    
    if (isLoggedIn) {
        return <p className="_login-message">Ya estás logeado.</p>;
    }
    

    return (
        <div className="_login-container">
            <h2 className="_login-title">Iniciar sesión</h2>
            <form onSubmit={handleLogin} className="_login-form">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" className="_login-input" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" className="_login-input" />
                <input type="submit" value="Iniciar sesión" className="_login-submit" />
                {error && <p className="_login-error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;