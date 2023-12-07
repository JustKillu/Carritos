import React, { useState, useEffect } from 'react';

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
        return <p>Ya estás logeado.</p>;
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <input type="submit" value="Login" />
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
