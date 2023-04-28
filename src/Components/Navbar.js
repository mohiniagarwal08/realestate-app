import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
        <>                <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <h1>Welcome! To the World of Food<span>.</span></h1>
                </a>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>

                        {
                            isAuthenticated ? (
                                <>
                                    <li className="dropdown"><a href="#"><span>My Account</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><Link to={'/dashboard'}>My Profile</Link></li>
                                            <li><a href="#" onClick={() => logout()}>Log Out</a></li>
                                        </ul>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><a href="" onClick={() => loginWithRedirect()}>Log In</a></li>
                                </>
                            )}
                    </ul>
                </nav>

            </div>
        </header>
          
        </>
    )
}

export default Navbar
