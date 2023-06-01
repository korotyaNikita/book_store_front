import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import ItemInput from "../../../../modules/itemInput/ItemInput"
import ItemSelect from "../../modules/itemSelect/itemSelect"
import itemsPatch from './../../../../actions/itemsPatch'

const UsersEdit = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [inputTitle, dispatchTitle] = useState('')
    const [inputEmail, dispatchEmail] = useState('')
    const [inputPassword, dispatchPassword] = useState('')
    const [roleId, dispatchRoleId] = useState(1)

    const data = {
        title: inputTitle,
        email: inputEmail,
        password: inputPassword,
        role_id: roleId
    }

    const submitRoles = () => {
        itemsPatch(`/admin/users/${params.id}`, data, navigate, `/admin/users`)
    }

    return (
        <div>
            <ItemInput inputValue={inputTitle} setInputValue={dispatchTitle} placeholder="Введіть ім'я користувача" type="text" id="title" labelName="Ім'я користувача"/>
            <ItemInput inputValue={inputEmail} setInputValue={dispatchEmail} placeholder="example@mail.com" type="email" id="email" labelName="E-mail"/>
            <ItemInput inputValue={inputPassword} setInputValue={dispatchPassword} placeholder="Введіть пароль" type="password" id="password" labelName="Пароль"/>
            <ItemSelect from="roles" setValue={dispatchRoleId} id="role" labelName="Оберіть роль"/>
            <button onClick={submitRoles}>Підтвердити</button>
        </div>
    )
};

export default UsersEdit
