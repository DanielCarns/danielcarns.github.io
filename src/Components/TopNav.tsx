import { Nav } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/icon-dark.png';
import { LinkContainer } from 'react-router-bootstrap'

export function TopNav() {
    return (
        <nav className="navbar fixed-top bg-white navbar-light navbar-expand-md bg-faded justify-content-center custom-toggler" id="topNav">
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
                <p className="nav-item top-logo-text">Daniel</p>
                <img className="logo" alt="sick logo" src={ logo }/>
                <p className="nav-item top-logo-text">Carns</p>
            </a>
            <button className="navbar-toggler custom-dark-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="custom-dark-toggler navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 top-nav-text unselectable" id="navbarSupportedContent">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item px-2">
                        <LinkContainer to='/'>
                            <Nav.Link className="nav-link top-nav-text">Home</Nav.Link>
                        </LinkContainer>
                    </li>

                    <li className="nav-item px-2">
                        <LinkContainer to="/engineering">
                            <Nav.Link className="nav-link top-nav-text">Engineering</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item px-2">
                        <LinkContainer to="/photography">
                            <Nav.Link className="nav-link top-nav-text">Photography</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item px-2">
                        <LinkContainer to="/about">
                            <Nav.Link className="nav-link top-nav-text">About</Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}