import React from "react"
import classes from "./../../style.module.scss"
import Navbar from "../../modules/Navigation/Navbar"
import Control from "../../modules/Navigation/Control"
import useAuthContext from "../../context/Auth/AuthContext"
import background from "./../../images/background.jpg"
import portrait from "./../../images/user.jpg"
import ProfileNavigation from "./modules/Navigation/Navigation"

const Profile = () => {
    const { user } = useAuthContext()

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                    <div className={classes.container__content__bg}>
                        <img src={background}></img>
                    </div>
                    <img src={portrait} className={classes.container__content__img}></img>
                <div className={classes.content_wrapper}>
                    <h1>{user?.title}</h1>
                    <ProfileNavigation />
                </div>
            </div>
        </div>
    )
};

export default Profile;
