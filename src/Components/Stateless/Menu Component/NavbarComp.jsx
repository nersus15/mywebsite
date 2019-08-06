import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-brand">
                <p className="Web-title">MyWebsite</p>
            </div>
            <Link className="Navbar-item" to='/'>Home</Link>
            <Link className="Navbar-item" to='/blog'>Blog</Link>
        </div>
    );
}
export default NavbarComp