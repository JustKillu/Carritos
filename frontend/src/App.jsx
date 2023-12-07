import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Login from './components/Login.jsx';
import Navb from './components/Navbar.jsx';

const LogoutButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('sessionToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('sessionToken');
        setIsLoggedIn(false);
        window.location.reload();
    };

    return isLoggedIn && <button onClick={handleLogout}>Cerrar sesión</button>;
};

function App() {
  return (
    <>
    <Navb />
    <Router>
      <LogoutButton />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
