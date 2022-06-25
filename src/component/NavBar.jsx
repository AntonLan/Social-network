import React from 'react';
import s from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Message</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>News</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Music</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;