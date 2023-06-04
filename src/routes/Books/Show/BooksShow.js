import React, { useContext, useEffect } from "react"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import classes from "./../../../style.module.scss"
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import itemsPost from "../../../actions/itemsPost";
import useAuthContext from "../../../context/Auth/AuthContext";

const BooksShow = () => {
    useEffect(() => {
        itemsFetch(`/books/${params.id}`, dispatchData, 'FETCH_ITEM')
    }, [])
    const {stateData, dispatchData} = useContext(ContextData)
    const book = stateData.item
    const params = useParams()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    
    const onClickHandler = (event) => {
        const data = {
            book_id: params.id,
            user_id: user.id
        }
        event.preventDefault()
        itemsPost(`/profile/${user.id}/library`, data, navigate, '/library')
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper} >
                    <div>
                        <div>{book.data?.name}</div>
                        <div>{book.data?.annotation}</div>
                        <div>{book.data?.author?.title}</div>
                        <div>{book.data?.genre?.title}</div>
                        <img src={book.data?.images[0]?.url}></img>
                    </div>
                    <Link to={`/books/${book.data?.id}/reader?page=1`}>Читати</Link>
                    <button onClick={onClickHandler}>Додати до бібліотеки</button>  
                </div>
            </div>
        </div>
    )
};

export default BooksShow;
