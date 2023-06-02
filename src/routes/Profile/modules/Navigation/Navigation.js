import React from "react"
import classes from "./navigation.module.scss"

const ProfileNavigation = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__item}>
                Коментарі
            </div>
            <div className={classes.nav__item}>
                Про мене
            </div>
            <div className={classes.nav__item}>
                Підписки
            </div>
        </div>
    )
};

export default ProfileNavigation;
