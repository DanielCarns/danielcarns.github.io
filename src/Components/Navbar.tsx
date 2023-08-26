import { Nav } from 'react-bootstrap';
import '../App.css';
import { LinkContainer } from 'react-router-bootstrap'
import React, { useState, useEffect } from 'react';
import useAnimationState from '../hooks/useAnimationState';
import darkLogo from '../assets/icon-dark.png';
import lightLogo from '../assets/icon.png';

interface NavbarProps {
    position?: String;
    theme? : String;
}
  
const Navbar: React.FC<NavbarProps> = ({ position = 'top', theme = 'light' }) => {
    const [animate, handleAnimationEnd] = useAnimationState('navbarAnimated');
    
    const isDark = theme === 'dark';
    const classPosition = `navbar ${isDark ? 'fixed-top' : 'fixed-bottom'}`;
    const navClassName = "navbar navbar-expand-md bg-faded justify-content-center custom-toggler"
    const navLinkClass = `nav-link ${isDark ? 'dark-nav-text' : 'light-nav-text'}`;
    const togglerClass = `navbar-toggler ${isDark ? "custom-dark-toggler" : "custom-light-toggler"}`;
    const logoText = `nav-item ${isDark ? "dark-logo-text" : "light-logo-text d-md-none"}`

    return (
        <nav className={navClassName + classPosition} onAnimationEnd={handleAnimationEnd}>
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
                <p className={logoText} >Daniel</p>
                <img className="logo" alt="logo" src={ isDark ? darkLogo : lightLogo }/>
                <p className={logoText}>Carns</p>
            </a>
            <button className={togglerClass} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 top-nav-text unselectable" id="navbarSupportedContent">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item px-2">
                        <LinkContainer to='/'>
                            <Nav.Link className={navLinkClass}>Home</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item px-2">
                        <LinkContainer to="/engineering">
                            <Nav.Link className={navLinkClass}>Engineering</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item px-2">
                        <LinkContainer to="/photography">
                            <Nav.Link className={navLinkClass}>Photography</Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
