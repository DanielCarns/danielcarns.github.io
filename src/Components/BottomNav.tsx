import logo from '../assets/icon.png';
import '../App.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function BottomNav() {
    return (
        <nav className="navbar fixed-bottom navbar-expand-md bg-faded justify-content-center pb-3" id="bottomNav">
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
                <p className="nav-item logo-text">Daniel</p>
                <img className="logo" alt="sick logo" src={logo}/>
                <p className="nav-item logo-text">Carns</p>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 bottom-nav-text">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end unselectable">
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link bottom-nav-text" href='./Engineering'>Engineering</Nav.Link>
                    </li>
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link bottom-nav-text" href='./Photography'>Photography</Nav.Link>
                    </li>
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link bottom-nav-text" href='./About'>About</Nav.Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}