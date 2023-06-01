import React from "react";
import { Link } from "react-router-dom";
import classes from "./adminNavbar.module.scss"

const AdminNavbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__item}>
                <Link to="/admin/roles?page=1">Ролі</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to="/admin/users?page=1">Користувачі</Link>
            </div>
        </div>
        
    );
}

export default AdminNavbar;