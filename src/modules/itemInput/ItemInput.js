import React from "react";
import classes from "./intemInput.module.scss"

const ItemInput = ({inputValue, setInputValue, placeholder, type}) => {
    return <input  
            className={classes.item_input} 
            type={type} 
            placeholder={placeholder} 
            value={inputValue} 
            onInput={(e) => setInputValue(e.target.value)} />
}

export default ItemInput