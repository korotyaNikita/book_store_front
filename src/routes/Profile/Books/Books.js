import React, { useEffect, useState, useContext }from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control";
import { Link, useSearchParams } from "react-router-dom";
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";
import useAuthContext from "../../../context/Auth/AuthContext";
import Pagination from "../../../modules/Pagination/Pagination";

const ProfileBooks = () => {
    const {stateData, dispatchData} = useContext(ContextData)
    const books = stateData.profileBooks
    const { user } = useAuthContext()
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage

    useEffect(() => {
        itemsFetch(`/profile/${user.id}/books`, dispatchData, "FETCH_PROFILE_BOOKS")
    }, [])

    const currentItems = books?.data.slice(firstItemIndex, lastItemIndex)

    return (
        books && <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.books_container__content}>
                <Link to="/profile/books/create" className={classes.book_link}>Додати книгу</Link>
                <div className={classes.add_books_wrapper}>
                    {   
                        books.length !== 0 && currentItems.map((elem, index) => {
                            return  (
                                <div key={index}>
                                    <img src={elem.images[0].url}></img>
                                    <Link className={classes.book_link}>{elem.name}</Link>
                                    <Link to={`/profile/books/${elem.id}/chapter/create`} className={classes.book_link}>Додати главу</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <Pagination 
                    totalItems={books.length !== 0 ? books.data.length : 0 } 
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    />
            </div>
        </div>
    )
};

export default ProfileBooks;
