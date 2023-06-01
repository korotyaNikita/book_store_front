import React, { useEffect, useState, useContext } from "react";
import ContextData from "../../../context/Data/ContextData";
import { Link, useSearchParams } from "react-router-dom";
import classes from "../admin.module.scss"
import Pagination from "../../../modules/Pagination/Pagination";
import itemsFetch from './../../../actions/ItemsFetch';
import ItemsTable from "../modules/itemsTable/ItemsTable";

const Roles = () => {
    const {stateData, dispatchData} = useContext(ContextData)
    const item = stateData.items
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage

    useEffect(() => {
        itemsFetch("/admin/roles", dispatchData, "FETCH_ITEMS")
    }, [])
    const currentItems = item.slice(firstItemIndex, lastItemIndex)

    const deleteItem = (id) => {
        dispatchData({
            type: "FETCH_ITEMS",
            payload: item.filter(item => item.id !== id)
        })
    }

    return (
        <div className={classes.content_wrapper}>
            <h1>Ролі</h1>
            <Link to="create">Додати</Link>
            <ItemsTable currentItems={currentItems} from="roles" currentPage={currentPage} deleteItem={deleteItem} />
            <Pagination 
                totalItems={item.length} 
                itemsPerPage={itemsPerPage}  
                currentPage={currentPage} 
            />
        </div>
    );
}

export default Roles;