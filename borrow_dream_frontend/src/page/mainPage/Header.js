import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Header = () => {

    return(
        <nav className="navbar" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="../../Image/img/BORROW DREAM.png" alt="..." /></Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;