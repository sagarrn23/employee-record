import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName={classes.currentMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/add-new' activeClassName={classes.currentMenu}>Add New</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;