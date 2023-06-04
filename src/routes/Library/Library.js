import React, {useEffect, useState, useContext } from "react";
import classes from "./../../style.module.scss"
import Navbar from '../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import itemsFetch from "../../actions/ItemsFetch";
import ContextData from "../../context/Data/ContextData";
import { useSearchParams, Link, useParams, useNavigate } from "react-router-dom";
import Pagination from "../../modules/Pagination/Pagination";
import itemsDelete from "../../actions/itemsDelete";

const Library = () => {
    const {stateData, dispatchData} = useContext(ContextData)
    const books = stateData.item
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        itemsFetch(`/profile/${params.id}/library`, dispatchData, "FETCH_ITEM")
    }, [])

    const currentItems = books.length !== 0 ? books.data.slice(firstItemIndex, lastItemIndex) : []
    
    const deleteItem = (id) => {
        dispatchData({
            type: "FETCH_ITEM",
            payload: books.data.filter(item => item.id !== id)
        })
    }

    const onClickHandler = (id) => {
        itemsDelete(`/profile/${params.id}/library/${id}`, id, navigate, `/library/${params.id}?page=${currentPage}`)
        deleteItem(id)
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    {   
                        books.length !== 0 && currentItems.map((elem, index) => {
                            return  (
                                <div key={index}>
                                    <Link to={`/books/${elem.id}`}>{elem.name}</Link>
                                    <div>{elem.annotation}</div>
                                    <div>{elem.author.title}</div>
                                    <img src={elem.images[0].url}></img>
                                    <div onClick={() => onClickHandler(elem.id)}>Вилучити з бібліотеки</div>
                                </div>
                            )
                        })
                    }
                    <Pagination 
                        totalItems={books.length !== 0 ? books.data.length : 0 } 
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        />
                </div>
            </div>
        </div>
    );
}

export default Library;