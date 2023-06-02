import React from "react"
import classes from "./navigation.module.scss"

const DropdownItem = ({ children }) => {
    return (
        <li className={classes.controls__dropdown_item}>
            {children}
        </li>
    )
};

export default DropdownItem;
