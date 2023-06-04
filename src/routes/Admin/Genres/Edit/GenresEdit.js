import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import ItemInput from "../../../../modules/itemInput/ItemInput";
import itemsPatch from '../../../../actions/itemsPatch'

const GenresEdit = () => {
    const navigate = useNavigate();
    const [inputValue, dispatchValue] = useState('')
    const params = useParams()

    const data = {
        title: inputValue
    }

    const submitGenres = () => {
        itemsPatch(`/admin/genres/${params.id}`, data, navigate, `/admin/genres`)
    }

    const setInputValue = (newInputValue) => {
        dispatchValue(newInputValue)
    }

    return (
        <div>
            <ItemInput inputValue={inputValue} setInputValue={setInputValue} placeholder="Введіть назву жанру" type="text" />
            <button onClick={submitGenres}>Підтвердити</button>
        </div>
    )
}

export default GenresEdit