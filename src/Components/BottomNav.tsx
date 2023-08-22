import logo from '../assets/icon.png';
import '../App.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function BottomNav() {
    return (
        <nav className="navbar fixed-bottom navbar-expand-md custom-toggler bg-faded justify-content-center pb-3" id="bottomNav">
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
                <p className="nav-item logo-text d-md-none">Daniel</p>
                <img className="logo" alt="sick logo" src={logo}/>
                <p className="nav-item logo-text d-md-none">Carns</p>
            </a>
            <button className="navbar-toggler custom-toggler custom-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 bottom-nav-text" id="collapsingNavbar">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end unselectable">
                    <li className="nav-item px-2">
                        <LinkContainer to="./engineering">
                            <Nav.Link className="nav-link bottom-nav-text">Engineering</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item px-2">
                        <LinkContainer to="./photography">
                            <Nav.Link className="nav-link bottom-nav-text">Photography</Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}