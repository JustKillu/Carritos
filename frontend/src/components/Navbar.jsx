import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

    const handleLogin = () => {
        window.location.href = "/login";
    };

    return (
        isLoggedIn ? 
        <button className="nav-link logout-button" onClick={handleLogout}>Cerrar sesión</button> :
        <button className="nav-link login-button" onClick={handleLogin}>Iniciar sesión</button>
    );
};

function Navb() {

	const showNavbar = () => {

        const navRef = useRef();
        
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    

    const [navbar, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setNav(true);
        } else {
            setNav(false);
        }   
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <header className={navbar ? "nav flex" : "header flex"}>
            <h1 className="title">Cars in Stock</h1>
            <nav>
                <a href="/" className="box">Inicio</a>
                <a href="/Modelos" className="box">Ve nuestro catalogo</a>
                <a href="/listas" className="box">Lista de tareas</a>
                <LogoutButton className="box" />
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>    
            </nav>
            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

        </header>
    );
};

export default Navb;
