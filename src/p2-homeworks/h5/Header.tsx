import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerLinks}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>PRE-JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>JUNIOR+</NavLink>
            </div>

            <div className={s.arrow}/>
        </div>
    )
}

export default Header
