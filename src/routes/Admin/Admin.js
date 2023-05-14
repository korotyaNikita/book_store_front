import React from "react";
import classes from "./../../style.module.scss"
import Navbar from './../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import AdminNavbar from "./modules/Navigation/AdminNavbar";
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div id={classes.container}>
            <div className={classes.header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.content}>
                <AdminNavbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;