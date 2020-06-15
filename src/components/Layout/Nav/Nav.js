import React from 'react';
import classes from './Nav.module.css';

const Nav = (props) => {
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                                <li>
                    <a href='/'>Add New</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;