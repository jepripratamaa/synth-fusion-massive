import { Navbar, Container, Nav } from 'react-bootstrap'

import '../css/main.css'
import logo from '../assets/logo.png'

import { navLinks } from "../data/index.js"
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className='atas'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo-img" /></Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* Link Menu Navbar */}
                <Nav className="mx-auto">
                    {navLinks.map((link) => {
                    return (
                        <div className="nav-link text-center" key={link.id}>
                        <NavLink to={link.path} >
                            {link.text}</NavLink>
                        </div>
                    );
                    })}
                </Nav>

                <div className="text-center">
                    <a href='login' button className='btn btn-dark rounded-2 me-2'>Login</a> {' '}
                    <a href='signup' button className='btn btn-outline-dark rounded-2'>Sign Up</a>
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        );
}

export default NavbarComponent