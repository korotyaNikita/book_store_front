import React from "react";
import classes from "../../admin.scss"

const ItemInput = ({inputValue, setInputValue}) => {
    return <>
        <input className={classes.input_text} type="text" placeholder="Назва" value={inputValue} onInput={(e) => setInputValue(e.target.value)}/>
    </>
}

export default ItemInput