import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { useState } from "react"
import ItemInput from "../../modules/itemInput/ItemInput";
import itemsSubmit from "../../../../actions/itemsSubmit";

const RolesEdit = () => {
    const navigate = useNavigate();
    const [inputValue, dispatchValue] = useState('')
    const location = useLocation()
    const { from, itemName } = location.state
    const params = useParams()

    const submitRoles = () => {
        itemsSubmit(`/admin/${from}/${params.id}`, inputValue, 'PATCH', navigate, `/admin/${from}`, from)
    }

    const setInputValue = (newInputValue) => {
        dispatchValue(newInputValue)
    }

    return (
        <div>
            <h1>{itemName}</h1>
            <ItemInput inputValue={inputValue} setInputValue={setInputValue} />
            <button onClick={submitRoles}>Підтвердити</button>
        </div>
    )
}

export default RolesEdit