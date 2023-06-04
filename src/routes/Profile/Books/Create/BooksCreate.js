import React, { useState } from "react"
import classes from "./../../../../style.module.scss"
import Navbar from "../../../../modules/Navigation/Navbar"
import Control from "../../../../modules/Navigation/Control";
import ItemInput from "../../../../modules/itemInput/ItemInput";
import { useNavigate } from "react-router";
import itemsPost from './../../../../actions/itemsPost';
import ItemSelect from "../../../../modules/itemSelect/itemSelect";
import useAuthContext from "../../../../context/Auth/AuthContext";

const BooksCreate = () => {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const [annotation, setAnnotation] = useState('')
    const [genreId, setGenreId] = useState(1);
    const { user } = useAuthContext();
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const submitBook = () => {
        const data = new FormData();
        data.append('name', title)
        data.append('annotation', annotation)
        data.append('book_genre_id', genreId)
        data.append('author_id', user.id)
        data.append('cover', file)
        itemsPost('/books', data, navigate, '/profile/books')
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <ItemInput inputValue={title} setInputValue={setTitle} placeholder='Введіть назву книги' type="text" />
                    <input type="file" onChange={handleFileChange}></input>
                    <ItemSelect url='/genres' setValue={setGenreId} labelName='Оберіть жанр'/>
                    <textarea value={annotation} onInput={(e) => setAnnotation(e.target.value)}>

                    </textarea>
                    <button onClick={submitBook}>Зберегти</button>
                </div>
            </div>
        </div>
    )
};

export default BooksCreate;
