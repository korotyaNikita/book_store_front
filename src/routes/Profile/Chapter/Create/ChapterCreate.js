import React, { useState } from "react"
import Navbar from "../../../../modules/Navigation/Navbar"
import Control from "../../../../modules/Navigation/Control"
import classes from "./../../../../style.module.scss"
import ItemInput from "../../../../modules/itemInput/ItemInput";
import { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { useNavigate, useParams } from "react-router";
import http from "../../../../actions/axios";
import NET from "../../../../network";

const ChapterCreate = () => {
    const editorRef = useRef()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const params = useParams()
    const navigate = useNavigate()

    const itemsPost = async (url, data) => {
        await http.post(`${NET.APP_URL}${url}`, data)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setContent(editorRef.current.getContent())
        const data = new FormData()
        data.append('title', title)
        data.append('text', content)
        data.append('book_id', params.id)
        data.get("text") !== "" && itemsPost('/profile/chapters', data).then(
            navigate(`/books/${params.id}`)
        )
    }

    return (
        <div className={classes.container}>
                <div className={classes.container__header}>
                    <Navbar />
                    <Control />
                </div>
                <div className={classes.container__content}>
                    <div className={classes.content_wrapper}>
                        <h1>Додати главу</h1>
                {/* <div className={classes.center_items}> */}
                        <ItemInput inputValue={title} setInputValue={setTitle} placeholder="Введіть назву глави" type="text" />
                        <Editor 
                            onInit={ (evt, editor) => editorRef.current = editor }
                            init={{
                                menubar: false
                            }}
                        />
                        <button onClick={submitHandler}>Додати главу</button>
                {/* </div> */}
                    </div>
                </div>
            </div>
    )
};

export default ChapterCreate;
