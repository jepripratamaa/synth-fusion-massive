import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'

import '../css/main.css'
import logo from '../assets/logo.png'


const NavbarComponent = () => {
    return (
        <>
        {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="nav-style navbar-expand-lg">
                <Container>
                <Navbar.Brand href="#">
                    <img src={logo}/>
                </Navbar.Brand>
    
                <Navbar.Toggle className='navbar-toggler border-0 ' aria-controls={`offcanvasNavbar-expand-${expand}`} />
    
                <Navbar.Offcanvas className='bg-transparent sidebar ' 
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                    <Offcanvas.Header className='head-sidebar' closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <Navbar.Brand href="#">
                                <img src={logo}/>
                            </Navbar.Brand>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
    
                    <Offcanvas.Body className='text-center' >
                        <Nav className="nav-menu-style justify-content-center align-item-center flex-grow-1 pe-3 gap-4">
                            <Nav.Link href="/" className='text-white' >Home</Nav.Link>
                            <Nav.Link href="/course" className='text-white' >Course</Nav.Link>
                            <Nav.Link href="/blog" className='text-white'>Articles</Nav.Link>
                            <Nav.Link href="/testimoni" className='text-white' >Testimoni</Nav.Link>
                        </Nav>
                        <div className=" d-flex justify-content-center align-items-center gap-4 text-center">
                            <a href="/login" className="login-btn text-white px-3 py-1 rounded-3 " >Login</a>
                            <a href="/signup" className="sign-btn text-white px-3 py-1 rounded-3 " >Sign Up</a>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
    
                </Container>
            </Navbar>
            ))}
        </>
        );
}

export default NavbarComponent