import React from "react"
import classes from "./../../admin.module.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemInput from "../../../../modules/itemInput/ItemInput";
import itemsPost from "../../../../actions/itemsPost";

const RolesCreate = () => {
    const navigate = useNavigate();
    const [inputValue, dispatchValue] = useState('')
    const data = {
        title: inputValue
    }

    const submitRoles = () => {
        itemsPost('/admin/roles', data, navigate, '/admin/roles')
    }

    const setInputValue = (newInputValue) => {
        dispatchValue(newInputValue)
    }

    return (
        <div className={classes.content_wrapper}>
            <h1>Додавання ролі</h1>
            <div>
                <ItemInput inputValue={inputValue} setInputValue={setInputValue} placeholder="Введіть назву ролі" type="text" id="title" labelName="Назва ролі"/>
                <button onClick={submitRoles}>Додати</button>
            </div>
        </div>
    )
}

export default RolesCreate