import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav style={{paddingLeft: 10}} className={s.nav}>
            <div>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
            </div>
            <div>
                <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;