import React, { useState } from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import ItemInput from "../../../modules/itemInput/ItemInput"
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit"
import useAuthContext from "../../../context/Auth/AuthContext"

const Registration = () => {
    const [inputTitle, setTitle] = useState('')
    const [inputEmail, setEmail] = useState('')
    const [inputPassword, setPassword] = useState('')
    const [inputPasswordConfirmation, setPasswordConfirmation] = useState('')
    const { register, errors } = useAuthContext()

    const handleRegister = async (event) => {
        event.preventDefault()
        register(inputTitle, inputEmail, inputPassword, inputPasswordConfirmation)
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.container__header}>
                    <Navbar />
                    <Control />
                </div>
                <div className={classes.container__content}>
                    <div className={classes.content_wrapper}>
                        <h1>Реєстрація</h1>
                        <ItemInput inputValue={inputTitle} setInputValue={setTitle} placeholder="Введіть Ім'я користувача" type="text" />
                        { errors.title && <span>{errors.title[0]}</span> }
                        <ItemInput inputValue={inputEmail} setInputValue={setEmail} placeholder="Введіть email" type="email" />
                        { errors.email && <span>{errors.email[0]}</span> }
                        <ItemInput inputValue={inputPassword} setInputValue={setPassword} placeholder="Введіть пароль" type="password" />
                        { errors.password && <span>{errors.password[0]}</span> }
                        <ItemInput inputValue={inputPasswordConfirmation} setInputValue={setPasswordConfirmation} placeholder="Введіть пароль ще раз" type="password" />
                        { errors.password_confirmation && <span>{errors.password_confirmation[0]}</span> }
                        <ButtonSubmit buttonText="Зареєструватись" handleSubmit={handleRegister}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration
