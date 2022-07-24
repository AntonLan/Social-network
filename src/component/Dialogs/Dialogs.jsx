import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={`${s.dialogs} row g-0`}>
            <div className={`${s.dialogsItems} col-2`}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>
            <div className={`${s.messages} col-10`}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you day</div>
                <div className={s.message}>You</div>
            </div>
        </div>
    )
}

export default Dialogs;