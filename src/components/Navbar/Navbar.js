import React from 'react';
import './Navbar.scss'
import logo from '../../assets/logo.png'

function Navbar(){

    return(
        <nav class="navbar nick-nav" role="navigation" aria-label="main navigation">
            <a class="navbar-item">
                {/* <img src={logo} width="112" height="28" alt="Bulma"/>
                <img src={logo} width="112" height="28" alt="Bulma"/> */}
            </a>
        </nav>
    )
}

export default Navbar;