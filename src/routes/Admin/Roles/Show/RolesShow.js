import React, { useContext, useEffect } from "react";
import classes from "./../../admin.scss"
import ContextData from "../../../../context/Data/ContextData";
import { useParams, Link } from "react-router-dom";
import itemsFetch from './../../../../actions/ItemsFetch';
import ItemRow from "../../modules/ItemRow/ItemRow";

const RolesShow = () => {
    const { stateData, dispatchData } = useContext(ContextData)
    const params = useParams()
    const item = stateData.item

    useEffect(() => {
        itemsFetch(`/admin/roles/${params.id}`, dispatchData, "FETCH_ITEM")
    }, [])

    return (
        <div className={classes.content_wrapper}>
            <h1>{item.title}</h1>
            <Link to={`/admin/roles/${item.id}/edit`} >Редагувати</Link>
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