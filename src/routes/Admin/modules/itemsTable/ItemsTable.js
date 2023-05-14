import React from "react"
import { Link, useNavigate } from "react-router-dom"
import itemsSubmit from "../../../../actions/itemsSubmit"

const ItemsTable = ({currentItems, from, currentPage, deleteItem}) => {
    const navigate = useNavigate()

    const submitRoles = (id) => {
        itemsSubmit(`/admin/${from}/${id}`, id, 'DELETE', navigate, `/admin/${from}?page=${currentPage}`)
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
                                <td><Link to={`${elem.id}`} state={{ from: from }}>{elem.title}</Link></td>
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