import React, {useEffect, useState, useContext, useMemo} from "react";
import classes from "./../../style.module.scss"
import Navbar from '../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import ItemSelect from "../../modules/itemSelect/itemSelect";
import itemsFetch from "../../actions/ItemsFetch";
import ContextData from "../../context/Data/ContextData";
import { useSearchParams, Link } from "react-router-dom";
import Pagination from "../../modules/Pagination/Pagination";

const Books = () => {
    const [genreId, setGenreId] = useState(1)
    const itemSelect = useMemo( () => <ItemSelect url='/genres' setValue={setGenreId} labelName='Оберіть жанр'/>, [] )
    const {stateData, dispatchData} = useContext(ContextData)
    const books = stateData.item
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    
    const data = {
        genre_id: genreId
    }
    
    
    useEffect(() => {
        itemsFetch('/books', dispatchData, "FETCH_ITEM")
    }, [])

    
    const currentItems = books.length !== 0 ? books.data.slice(firstItemIndex, lastItemIndex) : [] 
    
    
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    {itemSelect}
                    {   
                        books.length !== 0 && currentItems.map((elem, index) => {
                            return  (
                                <div key={index}>
                                    <Link to={`/books/${elem.id}`}>{elem.name}</Link>
                                    <div>{elem.annotation}</div>
                                    <div>{elem.author.title}</div>
                                    <img src={elem.images[0].url}></img>
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

export default Books;