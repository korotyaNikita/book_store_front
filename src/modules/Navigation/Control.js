import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss"

const Control = () => {
    return (
        <div className={classes.controls}>
            <form id="search-form" className={classes.controls__search} action="/search" method="GET">
                <input className={classes.controls__input} type="text" name="search" autoComplete="off" placeholder="Пошук"/>
            </form>
            <div className={classes.controls__login}>
                Вхід
            </div>
        </div>
    );
}

export default Control;