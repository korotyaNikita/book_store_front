import React, {useContext, useState, useEffect} from "react"
import ContextData from "../../../context/Data/ContextData"
import { useSearchParams, Link } from "react-router-dom"
import itemsFetch from "../../../actions/ItemsFetch"
import ItemsTable from "../modules/itemsTable/ItemsTable"
import Pagination from "../../../modules/Pagination/Pagination"
import classes from "../admin.module.scss"

const Users = () => {
    const {stateData, dispatchData} = useContext(ContextData)
    const item = stateData.items
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage

    useEffect(() => {
        itemsFetch("/admin/users", dispatchData, "FETCH_ITEMS")
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
            <h1>Користувачі</h1>
            <Link to="create" state={{ from: "users" }}>Додати</Link>
            <ItemsTable currentItems={currentItems} from="users" currentPage={currentPage} deleteItem={deleteItem} />
            <Pagination 
                totalItems={item.length} 
                itemsPerPage={itemsPerPage}  
                currentPage={currentPage} 
            />
        </div>
    )
}

export default Users