import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import classes from "./../../../style.module.scss"
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import itemsPost from "../../../actions/itemsPost";
import useAuthContext from "../../../context/Auth/AuthContext";
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit";
import like from "./../../../images/like-icon-vector-illustration.jpg"
import dislike from "./../../../images/126504.png"
import vomit from "./../../../images/1000534-puke-emoji-free-icon-hq.png"
import mind from "./../../../images/1058307-200.png"

const BooksShow = () => {
    useEffect(() => {
        itemsFetch(`/books/${params.id}`, dispatchData, 'FETCH_BOOK')
    }, [])
    const {stateData, dispatchData} = useContext(ContextData)
    const book = stateData.book
    const params = useParams()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [vomitNum, setVomit] = useState(0)
    
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
            {
            book && <div className={classes.container__content}>
                <div className={classes.content_wrapper} >
                    <div className={classes.book_and_desription}>
                        <div className={classes.images_and_likes}>
                            <img src={book.data.images[0].url}></img>
                            <div className={classes.col_likes}>
                                <div className={classes.like_item}>
                                    <button><img src={like}></img></button>
                                    2
                                </div>
                                <div className={classes.like_item}>
                                    <button><img src={dislike}></img></button>
                                    0
                                </div>
                                <div className={classes.like_item}>
                                    <button onClick={() => { setVomit(vomitNum+1) }}><img src={vomit}></img></button>
                                    {vomitNum}
                                </div>
                                <div className={classes.like_item}>
                                    <button><img src={mind}></img></button>
                                    0
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div><h3>{book.data?.name}</h3></div>
                            <div>Автор: {book.data?.author?.title}</div>
                            <div>Жанр: {book.data?.genre?.title}</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <Link to={`/books/${book.data?.id}/reader?page=1`}>Читати</Link>
                        <button onClick={onClickHandler}>Додати до бібліотеки</button>
                    </div>
                    <div style={{ width: '100%', marginBottom: '10px' }}>
                        <h2>Анотація</h2>
                        <div>{book.data?.annotation}</div>
                    </div>
                    <h2>Коментарі</h2>
                    <ButtonSubmit buttonText="Додати коментар" />
                    <textarea rows="5" cols="100">

                    </textarea>
                    <div>
                        <div>
                            <h3>MegaAdmin</h3>
                            <p>коментар</p>
                        </div>

                    </div>
                </div>
            </div>
            }
        </div>
    )
};

export default BooksShow;
