import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import ItemInput from "../../modules/itemInput/ItemInput";
import itemsSubmit from "../../../../actions/itemsSubmit";

const RolesEdit = () => {
    const navigate = useNavigate();
    const [inputValue, dispatchValue] = useState('')
    const params = useParams()

    const data = {
        title: inputValue
    }

    const submitRoles = () => {
        itemsSubmit(`/admin/roles/${params.id}`, data, 'PATCH', navigate, `/admin/roles`)
    }

    const setInputValue = (newInputValue) => {
        dispatchValue(newInputValue)
    }

    return (
        <div>
            <ItemInput inputValue={inputValue} setInputValue={setInputValue} placeholder="Введіть назву ролі" type="text" id="title" labelName="Назва ролі"/>
            <button onClick={submitRoles}>Підтвердити</button>
        </div>
    )
}

export default RolesEdit