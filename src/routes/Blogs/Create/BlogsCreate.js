import React, { useRef, useState } from "react";
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar";
import Control from "../../../modules/Navigation/Control";
import ItemInput from "../../../modules/itemInput/ItemInput";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router";
import itemsPost from "../../../actions/itemsPost";
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit";
import useAuthContext from "../../../context/Auth/AuthContext";


const BlogsCreate = () => {
    const editorRef = useRef()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { user } = useAuthContext()

    const submitHandler = (event) => {
        event.preventDefault()
        setContent(editorRef.current.getContent())
        const data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.append('author_id', user.id)
        data.get("content") !== "" && itemsPost(`/profile/${user.id}/blogs`, data, navigate, '/profile/blogs')
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <h1>Публікація</h1>
                    <ItemInput inputValue={title} setInputValue={setTitle} placeholder="Введіть назву блогу" type="text"/>
                    <Editor 
                        onInit={ (evt, editor) => editorRef.current = editor }
                        init={{
                            menubar: false
                        }}
                    />
                    <ButtonSubmit buttonText="Опублікувати блог" handleSubmit={submitHandler} />
                </div>
            </div>
        </div>
    );
}

export default BlogsCreate;