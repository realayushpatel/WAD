import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <>
        <nav className="navbar">
            <div className="navtitle">Image Gallery</div>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/submit">Submit</Link>
            </div>
        </nav>
    </>
);

export default Navbar;
