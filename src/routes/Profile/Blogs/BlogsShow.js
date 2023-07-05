import React, { useContext, useEffect, useState } from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar";
import Control from "../../../modules/Navigation/Control";
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";
import useAuthContext from "../../../context/Auth/AuthContext";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../../modules/Pagination/Pagination";

const BlogsShow = () => {
    const { user } = useAuthContext()
    const {stateData, dispatchData} = useContext(ContextData);
    const blogs = stateData.items
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    
    useEffect(() => {
        itemsFetch(`/profile/${user.id}/blogs`, dispatchData, "FETCH_ITEMS")
    }, [])

    const currentItems = blogs.length !== 0 ? blogs.data.slice(firstItemIndex, lastItemIndex) : []
    
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <h1>Блоги</h1>
                    <Link to='/profile/blogs/create'>Додати блог</Link>
                    {   
                        blogs.length !== 0 && currentItems.map((elem, index) => {
                            return  (
                                <div key={index}>
                                    <h1><Link to={`/profile/blogs/${elem.id}`}>{elem.title}</Link></h1>
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
};

export default BlogsShow;
