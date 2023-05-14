import React from "react"
import classes from "./../../admin.scss"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ItemInput from "../../modules/itemInput/ItemInput";
import itemsSubmit from "../../../../actions/itemsSubmit";

const RolesCreate = () => {
    const navigate = useNavigate();
    const [inputValue, dispatchValue] = useState('')
    const location = useLocation()
    const { from } = location.state

    const submitRoles = () => {
        itemsSubmit(`/admin/${from}`, inputValue, 'POST', navigate, `/admin/${from}`, from)
    }

    const setInputValue = (newInputValue) => {
        dispatchValue(newInputValue)
    }

    return (
        <div className={classes.content_wrapper}>
            <h1>Додавання</h1>
            <div>
                <ItemInput inputValue={inputValue} setInputValue={setInputValue} />
                <button onClick={submitRoles}>Додати</button>
            </div>
        </div>
    )
}

export default RolesCreate