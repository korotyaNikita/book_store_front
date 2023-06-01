import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss"
import useAuthContext from "../../context/Auth/AuthContext"

const Control = () => {
    const { user, logout } = useAuthContext()

    return (
        <div className={classes.controls}>
            <form id="search-form" className={classes.controls__search} action="/search" method="GET">
                <input className={classes.controls__input} type="text" name="search" autoComplete="off" placeholder="Пошук"/>
            </form>
            <div className={classes.controls__login}>
                {!user ? (
                    <Link to="/login">Вхід</Link>
                ) : (
                    <button onClick={logout}>Вихід</button>
                )}
            </div>
        </div>
    );
}

export default Control;