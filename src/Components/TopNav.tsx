import { Nav } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/icon-dark.png';

export function TopNav() {
    return (
        <nav className="navbar fixed-top bg-white navbar-expand-md bg-faded justify-content-center" id="topNav">
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
                <p className="nav-item top-logo-text">Daniel</p>
                <img className="logo" alt="sick logo" src={ logo }/>
                <p className="nav-item top-logo-text">Carns</p>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 top-nav-text unselectable">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link top-nav-text" href='./'>Home</Nav.Link>
                    </li>
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link top-nav-text" href='./Engineering'>Engineering</Nav.Link>
                    </li>
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link top-nav-text" href='./Photography'>Photography</Nav.Link>
                    </li>
                    <li className="nav-item px-2">
                        <Nav.Link className="nav-link top-nav-text" href='./About'>About</Nav.Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}