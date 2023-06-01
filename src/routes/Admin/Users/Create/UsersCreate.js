import React from "react"
import classes from "./../../admin.module.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemInput from "../../../../modules/itemInput/ItemInput";
import itemsPost from "../../../../actions/itemsPost";
import ItemSelect from "../../modules/itemSelect/itemSelect";

const UsersCreate = () => {
    const navigate = useNavigate();
    const [inputTitle, dispatchTitle] = useState('')
    const [inputEmail, dispatchEmail] = useState('')
    const [inputPassword, dispatchPassword] = useState('')
    const [roleId, dispatchRoleId] = useState(1)

    const submitRoles = () => {
        itemsPost('/admin/users', data, navigate, '/admin/users')
    }

    const data = {
        title: inputTitle,
        email: inputEmail,
        password: inputPassword,
        role_id: roleId
    }

    return (
        <div className={classes.content_wrapper}>
            <h1>Додавання користувача</h1>
            <div>
                <ItemInput inputValue={inputTitle} setInputValue={dispatchTitle} placeholder="Введіть ім'я користувача" type="text" id="title" labelName="Ім'я користувача"/>
                <ItemInput inputValue={inputEmail} setInputValue={dispatchEmail} placeholder="example@mail.com" type="email" id="email" labelName="E-mail"/>
                <ItemInput inputValue={inputPassword} setInputValue={dispatchPassword} placeholder="Введіть пароль" type="password" id="password" labelName="Пароль"/>
                <ItemSelect from="roles" setValue={dispatchRoleId} id="role" labelName="Оберіть роль"/>
                <button onClick={submitRoles}>Додати</button>
            </div>
        </div>
    )
}

export default UsersCreate