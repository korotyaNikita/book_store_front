import React from "react"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import classes from "./../../../style.module.scss"

const ProfileEdit = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                
            </div>
        </div>
    )
};

export default ProfileEdit
