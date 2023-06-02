import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss"
import useAuthContext from "../../context/Auth/AuthContext"
import DropdownItem from "./DropdownItem";
import portrait from "./../../images/user.jpg"

const Control = () => {
    const { user, logout } = useAuthContext()
    const  [open, setOpen] = useState(false)

    return (
        <div className={classes.controls}>
            <form id="search-form" className={classes.controls__search} action="/search" method="GET">
                <input className={classes.controls__input} type="text" name="search" autoComplete="off" placeholder="Пошук"/>
            </form>
            {!user ? (
                <div className={classes.controls__login}>
                    <Link to="/login">Вхід</Link>
                </div>
            ) : (
                <>
                <div className={classes.controls__menu_trigger}  onClick={() => {setOpen(!open)}}>
                    <img src={portrait}></img>
                </div>

                { open && <div className={`${classes.controls__dropdown_menu} ${open ? 'active' : 'inactive'}`}>
                    <DropdownItem>
                        <Link to="/profile">Мій профіль</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link to="/profile/edit">Редагувати профіль</Link>
                    </DropdownItem>
                    <li className={classes.controls__dropdown_item} onClick={logout}>
                        Вихід
                    </li>
                </div> }
                </>
            )}
        </div>
    );
}

export default Control;