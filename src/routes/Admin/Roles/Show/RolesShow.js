import React, { useContext, useEffect } from "react";
import classes from "./../../admin.scss"
import ContextData from "../../../../context/Data/ContextData";
import { useLocation, useParams, Link } from "react-router-dom";
import itemsFetch from './../../../../actions/ItemsFetch';
import ItemRow from "../../modules/ItemRow/ItemRow";

const RolesShow = () => {
    const { stateData, dispatchData } = useContext(ContextData)
    const params = useParams()
    const item = stateData.item
    const location = useLocation()
    const { from } = location.state

    useEffect(() => {
        itemsFetch(`/admin/${from}/${params.id}`, dispatchData, "FETCH_ITEM")
    }, [])

    return (
        <div className={classes.content_wrapper}>
            <h1>{item.title}</h1>
            <Link to={`/admin/${from}/${item.id}/edit`} state={{from: from, itemName: item.title}}>Редагувати</Link>
            <table>
                <tbody>
                    <ItemRow item={item.id} itemTitle="ID" />
                    <ItemRow item={item.title} itemTitle="Назва" />
                </tbody>
            </table>
        </div>
    )
}

export default RolesShow 