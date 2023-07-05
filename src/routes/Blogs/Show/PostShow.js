import React, { useContext, useEffect, useState } from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar"
import Control from "../../../modules/Navigation/Control"
import ContextData from "../../../context/Data/ContextData"
import { useParams } from "react-router";
import itemsFetch from "../../../actions/ItemsFetch"
import ItemInput from "../../../modules/itemInput/ItemInput"
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit"

const PostShow = () => {
    const {stateData, dispatchData} = useContext(ContextData)
    const [message, setMessage] = useState('')
    const post = stateData.post
    const params = useParams()

    useEffect(() => {
        itemsFetch(`/posts/${params.id}`, dispatchData, "FETCH_POST")
    }, [])

    return (
        post && <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <h1>{post.title}</h1>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                    </div>
                    <ButtonSubmit buttonText="Додати коментар" />
                    <textarea value={message} onInput={(e) => setMessage(e.target.value)} rows="5" cols="100">

                    </textarea>
                </div>
            </div>
        </div>
    )
};

export default PostShow;
