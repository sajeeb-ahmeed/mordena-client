import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { MdAddIcCall, MdOutgoingMail } from 'react-icons/md'
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container className='text-center'>
                    <Navbar.Brand as={Link} to="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <a className='me-lg-5 mb-4 mb-lg-0' href="tel:+8801748402018">
                                <MdAddIcCall size="24" className="nav-linker" />
                            </a>
                            <span onClick={() => window.location = 'mailto:sajeeb.web@gmail.com'}> <MdOutgoingMail size="24" className="nav-linker text-primary" /></span>

                        </Nav>
                        <Nav className='mx-auto text-center d-block'>
                            <img className='object-fit' height={90} width={170} src={logo} alt="" />
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>



                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;