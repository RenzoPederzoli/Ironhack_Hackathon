import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../Styles/Nav.css"

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                <Link to="/">
                 <div className='logo'></div>

                </Link>
                <ul>
                    <li><Link className='nav-links' to='/'>HOME</Link></li>
                    <li><Link className='nav-links' to='/works'>WORK</Link></li>
                    <li><Link className='nav-links' to='/about'>ABOUT ME</Link></li>
                    <li><Link className='nav-links' to='/contact'>CONTACT</Link></li>
                </ul>  
                </nav>
            </div>
        );
    }
}

export default Navbar;