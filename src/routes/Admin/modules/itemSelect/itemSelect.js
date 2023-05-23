import React from "react"
import { useEffect, useContext } from "react"
import itemsFetch from "../../../../actions/ItemsFetch"
import ContextData from "../../../../context/Data/ContextData";

const ItemSelect = ({from, setValue, id, labelName}) => {
    const {stateData, dispatchData} = useContext(ContextData)
    const roles = stateData.items

    useEffect(() => {
        itemsFetch(`/admin/${from}`, dispatchData, "FETCH_ITEMS")
    }, [])

    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <select onChange={(e) => setValue(e.target.options[e.target.selectedIndex].value)} defaultValue={1}>
                <option disabled value={1}>{labelName}</option>
                {
                    roles.map((elem, index) => {
                        return (
                            <option value={elem.id} key={index}>{elem.title}</option>
                        )
                    })
                }
            </select>  
        </>
    )
};

export default ItemSelect;
