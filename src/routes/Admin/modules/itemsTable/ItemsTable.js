import React from "react"
import { Link, useNavigate } from "react-router-dom"
import itemsDelete from "../../../../actions/itemsDelete"

const ItemsTable = ({currentItems, from, currentPage, deleteItem}) => {
    const navigate = useNavigate()

    const submitRoles = (id) => {
        itemsDelete(`/admin/${from}/${id}`, id, navigate, `/admin/${from}?page=${currentPage}`)
        deleteItem(id)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Назва</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <td>{elem.id}</td>
                                <td><Link to={`${elem.id}`} >{elem.title}</Link></td>
                                <td><button onClick={() => submitRoles(elem.id)}>X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ItemsTable