import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                <ul>
                    <li><Link class='nav-links' to='/home'>HOME</Link></li>
                    <li><Link class='nav-links' to='/work'>WORK</Link></li>
                    <li><Link class='nav-links' to='about'>ABOUT ME</Link></li>
                    <li><Link class='nav-links' to='contact'>CONTACT</Link></li>
                </ul>  
                </nav>
            </div>
        );
    }
}

export default Navbar;