import React, { useContext, useEffect, useState } from "react";
import classes from "./../../style.module.scss"
import Navbar from "../../modules/Navigation/Navbar";
import Control from "../../modules/Navigation/Control";
import ContextData from "../../context/Data/ContextData";
import itemsFetch from "../../actions/ItemsFetch";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../modules/Pagination/Pagination";


const Blogs = () => {
    const {stateData, dispatchData} = useContext(ContextData);
    const blogs = stateData.blogs
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    
    useEffect(() => {
        itemsFetch(`/posts`, dispatchData, "FETCH_BLOGS")
    }, [])

    const currentItems = blogs?.data.slice(firstItemIndex, lastItemIndex)
    
    return (
        
        blogs && <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <h1>Блоги</h1>
                    {   
                        blogs.length !== 0 && currentItems.map((elem, index) => {
                            return  (
                                <div key={index}>
                                    <h1><Link to={`/blogs/${elem.id}`}>{elem.title}</Link></h1>
                                    <div>Автор: {elem.author.title}</div>
                                    <div dangerouslySetInnerHTML={{__html: elem.content.slice(0, 200)}}></div>
                                </div>
                            )
                        })
                    }
                    <Pagination 
                        totalItems={blogs.length !== 0 ? blogs.data.length : 0 } 
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        />
                </div>
            </div>
        </div>
    )
}

export default Blogs;