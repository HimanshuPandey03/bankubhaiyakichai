import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo_transparent.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Banku Bhaiya Ki Chai" className="logo-image" />
                </Link>

                <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="nav-links" onClick={() => setIsOpen(false)}>Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/feedback" className="nav-links" onClick={() => setIsOpen(false)}>Feedback</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
