import React from 'react';
import classes from './Nav.module.css';

function Nav(){
    return (

        <nav className={classes.nav}>
            <div className={classes.item}><a href="#0">Profile</a></div>
            <div className={classes.item}><a href="#0">Messages</a></div>
            <div className={classes.item}><a href="#0">News</a></div>
            <div className={classes.item}><a href="#0">Music</a></div>
            <div className={classes.item}><a href="#0">Settings</a></div>
        </nav>

        )

}

export default Nav;