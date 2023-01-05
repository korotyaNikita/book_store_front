import React from "react";
import classes from "./../../style.module.scss"
import Navbar from './../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";

const General = () => {
    return (
        <div id={classes.container}>
            <div className={classes.header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.content}>
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
            </div>
        </div>
    );
}

export default General;