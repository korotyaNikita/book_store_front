import React, { useState } from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import ItemInput from "../../../modules/itemInput/ItemInput"
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit"
import { Link } from "react-router-dom"
import useAuthContext from "../../../context/Auth/AuthContext"

const Login = () => {
    const [inputEmail, setEmail] = useState('')
    const [inputPassword, setPassword] = useState('')
    const { login, errors } = useAuthContext()

    const handleLogin = async (event) => {
        event.preventDefault()
        login( inputEmail, inputPassword )
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <ItemInput inputValue={inputEmail} setInputValue={setEmail} placeholder="Введіть email" type="email" />
                    { errors.email && <span>{errors.email[0]}</span> }
                    <ItemInput inputValue={inputPassword} setInputValue={setPassword} placeholder="Введіть пароль" type="password" />
                    { errors.password && <span>{errors.password[0]}</span> }
                    <ButtonSubmit buttonText="Увійти" handleSubmit={handleLogin}/>
                    <p>Немає облікового запису?</p>
                    <Link to="/registration">Зареєструватись</Link>
                </div>
            </div>
        </div>
    )
}

export default Login