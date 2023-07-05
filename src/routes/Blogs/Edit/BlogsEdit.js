import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar";
import Control from "../../../modules/Navigation/Control";
import ItemInput from "../../../modules/itemInput/ItemInput";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate, useParams } from "react-router";
import itemsPost from "../../../actions/itemsPost";
import ButtonSubmit from "../../../modules/buttonSubmit/buttonSubmit";
import useAuthContext from "../../../context/Auth/AuthContext";
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";


const BlogsEdit = () => {
    const editorRef = useRef()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const params = useParams()

    const {stateData, dispatchData} = useContext(ContextData);
    const blogs = stateData.items

    useEffect(() => {
        itemsFetch(`/posts/${params.id}`, dispatchData, "FETCH_ITEMS")
        setTitle(blogs.title)
        setContent(blogs.content)
    }, [])

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
                        initialValue={content}
                    />
                    <ButtonSubmit buttonText="Опублікувати блог" handleSubmit={submitHandler} />
                </div>
            </div>
        </div>
    );
}

export default BlogsEdit;