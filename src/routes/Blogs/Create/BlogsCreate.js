import React, { useRef, useState } from "react";
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar";
import Control from "../../../modules/Navigation/Control";
import ItemInput from "../../../modules/itemInput/ItemInput";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router";
import itemsPost from "../../../actions/itemsPost";


const BlogsCreate = () => {
    const editorRef = useRef()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        setContent(editorRef.current.getContent())
        const data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.get("content") !== "" && itemsPost('/profile/blogs', data, navigate, '/profile/blogs')
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <ItemInput inputValue={title} setInputValue={setTitle} placeholder="Введіть назву блогу" type="text"/>
                    <Editor 
                        onInit={ (evt, editor) => editorRef.current = editor }
                        init={{
                            menubar: false
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default BlogsCreate;