import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../Navbar/Image/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importing Font Awesome Bars icon

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container-fluid border-bottom">
            <header className="container d-flex flex-wrap align-items-center justify-content-between">
                {/* Hamburger icon on the left side */}
                <button 
                    className="navbar-toggler d-md-none" 
                    type="button" 
                    onClick={toggleMenu}
                >
                    <FaBars size={30} />
                </button>

                {/* Logo */}
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} width="100%" height="62" alt="logo" />
                    </Link>
                </div>

                {/* Nav links */}
                <ul className={`nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ${isMenuOpen ? 'show' : 'd-none d-md-flex'}`}>
                    <li><Link to="/" className="nav-link px-2 link-secondary text-dark">Home</Link></li>
                    <li><Link to="/products" className="nav-link px-2 text-dark">Products</Link></li>
                    <li><Link to="/about" className="nav-link px-2 text-dark">About Us</Link></li>
                    <li><Link to="/contact" className="nav-link px-2 text-dark">Contact Us</Link></li>
                </ul>

                {/* Sign-in and Sign-up buttons */}
                <div className="col-md-3 text-end">
                    <button type="button" className="btn me-2">Sign up</button>
                    <button
    type="button"
    className="btn btn-primary"
    style={{
        border: "none",
        backgroundColor: "#7A60CB",
        color: "#fff"
    }}
>
    Sign In
</button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
