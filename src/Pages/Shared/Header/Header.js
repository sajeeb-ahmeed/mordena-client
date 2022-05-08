import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos.png'
import { MdAddIcCall, MdOutgoingMail } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container className='text-center'>
                    <Navbar.Brand as={Link} to="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <div className=" flex-column">
                                <a className='me-lg-5 mb-4 mb-lg-0 text-light' href="tel:+8801748402018">
                                    <MdAddIcCall size="24" className="nav-linker text-light me-2" />
                                    +01748402018
                                </a>
                                <span className='text-light' onClick={() => window.location = 'mailto:sajeeb.web@gmail.com'}> <MdOutgoingMail size="24" className="nav-linker text-light" />
                                    Sajeeb.web@gmail.com</span>
                            </div>

                        </Nav>
                        <Nav className='mx-auto text-center d-block'>
                            <img className='object-fit' height={90} width={170} src={logo} alt="" />
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="/ManageInventory">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <>
                                        <Nav.Link onClick={handleSignOut}> Log Out</Nav.Link>
                                        {/* <img className='text-center' style={{ width: '40px', height: "40px", borderRadius: "50%", marginLeft: "5px" }} a src={user?.photoURL} alt="User" /> */}

                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;