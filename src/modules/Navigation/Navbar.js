import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss"
import useAuthContext from "../../context/Auth/AuthContext";

const Navbar = () => {
    const { user } = useAuthContext()

    return (
        <div className={classes.nav}>
            <div className={classes.nav__item}>
                <Link to="/">Головна</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/genres?page=1">Книги</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/blogs?page=1">Блоги</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to={`/library/${user?.id}?page=1`}>Бібліотека</Link>
            </div>
            {
                user?.role_id === 2 && <div className={classes.nav__item}>
                    <Link to="/admin">Панель адміна</Link>
                </div>
            }
        </div>
    );
}

export default Navbar;