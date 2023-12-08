import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [confirmation, setConfirmation] = useState(null); // Agrega este estado

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.message);
                setConfirmation(null); // Limpia el mensaje de confirmación
            } else {
                console.log(data);
                setConfirmation('Registro exitoso!'); // Agrega este mensaje de confirmación
                setTimeout(() => {
                    navigate('/login'); // Redirige después de 2 segundos
                }, 2000);
            }
        } catch (err) {
            setError(err.message);
            setConfirmation(null); // Limpia el mensaje de confirmación
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit} className="register">
            <label>
                Nombre de usuario:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <div className="error">{error}</div>}
            {confirmation && <div className="confirmation">{confirmation}</div>} {/* Muestra el mensaje de confirmación */}
            <input type="submit" value="Registrarse" />
            <button className="login-button" onClick={handleLoginRedirect}>Iniciar sesión</button>
        </form>
    );
}

export default Register;
