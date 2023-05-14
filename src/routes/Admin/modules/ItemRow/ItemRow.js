import React from "react";

const ItemRow = ({ item, itemTitle}) => {

    return (
        <tr>
            <td>
                {itemTitle}
            </td>
            <td>
                {item}
            </td>
        </tr>
    )

}

export default ItemRow