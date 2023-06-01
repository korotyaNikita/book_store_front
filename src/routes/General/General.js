import React, { useEffect } from "react";
import classes from "./../../style.module.scss"
import Navbar from './../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import useAuthContext from "../../context/Auth/AuthContext";

const General = () => {
    const { user } = useAuthContext()

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div>
                    Бестселлери
                </div>
                <div>
                    Новинки
                </div>
                <div>
                    Останні оновлення
                </div>
                <div>
                    Добірки книг
                </div>
                <div>
                    Про сайт
                </div>
            </div>
            <div className={classes.sidebar}>
                <div>
                    Блоги
                </div>
                <div>
                    {user?.title}
                </div>
            </div>
        </div>
    );
}

export default General;