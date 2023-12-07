import { useRef } from "react";
import {useState , useEffect} from "react";
import "../Navb.css";

function Navb() {

    const [navbar, setNav] = useState(false);
	const navRef = useRef();





	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

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
			<nav  ref={navRef}>
				<a href="/">Inicio</a>
				<a href="/agregartasks">Añadir Tareas</a>
				<a href="/listas">Lista de tareas</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
                    <i className="fas fa-times"></i>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				
			</button>
		</header>
	);
}

export default Navb;