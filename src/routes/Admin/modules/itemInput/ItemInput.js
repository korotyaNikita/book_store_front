import React from "react";
import classes from "../../admin.scss"

const ItemInput = ({inputValue, setInputValue, placeholder, type, id, labelName}) => {
    return <>
        <label htmlFor={id}>{labelName}</label>
        <input id={id} className={classes.input_text} type={type} placeholder={placeholder} value={inputValue} onInput={(e) => setInputValue(e.target.value)}/>
    </>
}

export default ItemInput