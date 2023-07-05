import React, {useEffect, useState, useContext, useMemo} from "react";
import classes from "./../../style.module.scss"
import Navbar from '../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import ItemSelect from "../../modules/itemSelect/itemSelect";
import itemsFetch from "../../actions/ItemsFetch";
import ContextData from "../../context/Data/ContextData";
import { useSearchParams, Link } from "react-router-dom";
import Pagination from "../../modules/Pagination/Pagination";
import ItemInput from "../../modules/itemInput/ItemInput";

const Books = () => {
    const [genreId, setGenreId] = useState(1)
    const itemSelect = useMemo( () => <ItemSelect url='/genres' setValue={setGenreId} labelName='Оберіть жанр'/>, [] )
    const {stateData, dispatchData} = useContext(ContextData)
    const books = stateData.books
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    
    const data = {
        genre_id: genreId
    }
    
    
    useEffect(() => {
        itemsFetch('/books', dispatchData, "FETCH_BOOKS")
    }, [])

    
    const currentItems = books?.data.slice(firstItemIndex, lastItemIndex) 
    
    
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                {
                books && <div className={classes.content_wrapper}>
                    <div className={classes.input_select}>
                        <input placeholder="Пошук"></input>
                        {itemSelect}
                    </div>
                    <div className={classes.column_book_wrapper}>
                        {   
                            currentItems.map((elem, index) => {
                                return  (
                                    <div key={index} className={classes.item_book}>
                                        <img src={elem.images[0].url}></img>
                                        <div className={classes.book_description}>
                                            <Link to={`/books/${elem.id}`} className={classes.book_item}>{elem.name}</Link>
                                            <div className={classes.book_item}>{elem.annotation}</div>
                                            <div className={classes.book_item}>{elem.author.title}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Pagination 
                        totalItems={books?.length !== 0 ? books?.data.length : 0 } 
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        />
                </div>
                }
            </div>
        </div>
    );
}

export default Books;