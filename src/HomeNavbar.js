import React, { useContext } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './store/auth-context';
import LoginModal from './LoginModal';
import SearchBar from './components/common/searchBar';
import './styles/HomeNavbar.css';
import logo from './images/logo.png';

function HomeNavbar(props) {
    const authCtx = useContext(AuthContext);

    return (
        <>
        <div>
            <Navbar expand="md" className="home-navbar navbar-light bg-light">
                <Container className='align-items-center' style={{height: '100%'}}>
                    <Navbar.Brand className="home-navbar-brand align-items-center">
                        <NavLink to="/" className="navlink-logo navbar-brand">
                            <img src={logo} alt="logo" className="home-logo"></img>
                            streato
    </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav 
                            style={{width: '100%'}} 
                            className={!authCtx.isLoggedIn ? 'justify-content-end align-items-center' : "justify-content-space-between align-items-center"}
                        >
                            <div className='container-fluid'>
                                <Nav.Item 
                                    className='home-header-items nav-search-bar'
                                    style={{marginRight: '5rem', width: '60%'}}
                                >
                                    <SearchBar />
                                </Nav.Item>
                            </div>
                            {/* {
                                !authCtx.isLoggedIn 
                                && (
                                    <>
                                        <Nav.Item className="home-header-items ">
                                            <NavLink to="/explore" className="" activeClassName="selected">
                                            Explore{' '}
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item className="home-header-items">
                                            <NavLink activeClassName="selected" to="/about" className="">
                                            {' '}
                                            About Us
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item className="home-header-items ">
                                            <NavLink to="/Blogs" className="" activeClassName="selected">
                                            Blogs
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item className="home-header-items">
                                            <Link to="/become-our-patner" className="">
                                            Become our patner
                                            </Link>
                                        </Nav.Item>
                                    </>
                                )
                            } */}
                            {!authCtx.isLoggedIn && (
                                <Nav.Item className="">
                                    <Button
                                        type="button"
                                        variant="warning"
                                        size="lg"
                                        className="home-btnn"
                                        data-bs-toggle="modal" 
                                        data-bs-target="#loginBackdrop"
                                        style={{width: '100%'}}
                                    >
                                        Login/Sign Up
                                    </Button>
                                {' '}
                                </Nav.Item>
                            )}
                            {authCtx.isLoggedIn && (
                                <Nav.Item>
                                <Button
                                    type="button"
                                    variant="warning"
                                    size="lg"
                                    className="home-btnn"
                                    onClick={authCtx.logout}
                                >
                                    Logout
                                </Button>
                              
                                </Nav.Item>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <LoginModal />
        </>
    )
}

export default HomeNavbar;