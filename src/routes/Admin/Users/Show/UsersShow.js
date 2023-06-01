import React, { useContext, useEffect } from "react";
import classes from "./../../admin.module.scss"
import ContextData from "../../../../context/Data/ContextData";
import { useParams, Link } from "react-router-dom";
import itemsFetch from './../../../../actions/ItemsFetch';
import ItemRow from "../../modules/ItemRow/ItemRow";

const UsersShow = () => {
    const { stateData, dispatchData } = useContext(ContextData)
    const params = useParams()
    const item = stateData.item

    useEffect(() => {
        itemsFetch(`/admin/users/${params.id}`, dispatchData, "FETCH_ITEM")
    }, [])

    return (
        <div className={classes.content_wrapper}>
            <h1>{item.title}</h1>
            <Link to={`/admin/users/${item.id}/edit`} >Редагувати</Link>
            <table>
                <tbody>
                    <ItemRow item={item.id} itemTitle="ID" />
                    <ItemRow item={item.title} itemTitle="Ім'я користувача" />
                    <ItemRow item={item.email} itemTitle="Email" />
                    <ItemRow item={item.role_id} itemTitle="Роль" />
                </tbody>
            </table>
        </div>
    )
}

export default UsersShow 