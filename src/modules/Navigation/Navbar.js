import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss"

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__item}>
                <Link to="/">Головна</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/books">Книги</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/blogs">Блоги</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/library">Бібліотека</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/admin">Панель адміна</Link>
            </div>
        </div>
    );
}

export default Navbar;