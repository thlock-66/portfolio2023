import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'; // Import the logo image
import './Header.css';


const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const shouldHaveShadow = scrollPosition > 0;
            setHasShadow(shouldHaveShadow);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${hasShadow ? 'shadow' : ''}`}>
            <div className="headercontent">
                <div className="logo">
                    <a>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </a>

                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/work">Work</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;
