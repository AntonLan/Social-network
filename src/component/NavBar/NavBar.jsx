import React from 'react';
import s from './NavBar.module.css'
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <nav style={{paddingLeft: 10}}
            className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/profile" className={s.item}>Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/dialogs" className={s.item}>Message</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/News" className={s.item}>News</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/Music" className={s.item}>Music</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/Settings" className={s.item}>Settings</Link>
            </div>
        </nav>
    )
}

export default NavBar;