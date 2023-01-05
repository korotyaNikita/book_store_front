import React from "react";
import classes from "./../../style.module.scss"
import Navbar from "../../modules/Navigation/Navbar";
import Control from "../../modules/Navigation/Control";


const Blogs = () => {
    return (
        <div id={classes.container}>
            <div className={classes.header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.content}>Content</div>
        </div>
    );
}

export default Blogs;