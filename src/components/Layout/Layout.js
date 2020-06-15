import React from 'react';
import classes from './Layout.module.css';
import Nav from './Nav/Nav';
import EmployeeList from "../../containers/Employees/Employees";

const Layout = () => {
    return(
        <div className={classes.container}>
            <header className={classes.nav}>
                <Nav />
            </header>
            <main className={classes.wrapper}>
                <ul className={classes.content}>
                    <EmployeeList />
                </ul>
            </main>
        </div>
    )
}

export default Layout;