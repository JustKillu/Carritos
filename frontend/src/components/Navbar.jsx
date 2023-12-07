import { useState, useEffect } from "react";
import "./styles/Navb.css";

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

	return isLoggedIn && <button className="nav-link logout-button" onClick={handleLogout}>Cerrar sesión</button>;

};

function Navb() {

    const [navbar, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true);
        } else {
            setNav(false);
        }   
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <header className={navbar ? "nav" : "header"}>
            <h3>QueHaceres</h3>
            <nav>
                <a href="/" className="nav-link">Inicio</a>
                <a href="/agregartasks" className="nav-link">Añadir Tareas</a>
                <a href="/listas" className="nav-link">Lista de tareas</a>
                <LogoutButton />
            </nav>
        </header>
    );
};

export default Navb;
