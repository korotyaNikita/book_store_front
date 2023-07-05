import React from "react"
import classes from "./pagination.module.scss"
import { Link } from "react-router-dom";

const Pagination = ({totalItems, itemsPerPage, currentPage}) => {
    let pages = []
    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={classes.pagination}>
            {
                pages.map((page, index) => {
                    
                    if (index < Number(currentPage) + 3 && index >= Number(currentPage) - 3) {
                        return <Link 
                                    to={`?page=${page}`} 
                                    key={index} 
                                    style={{color: page === Number(currentPage) ? '#b96d2c' : '#0a0a0a'}}
                                >
                                    {page}
                                </Link>
                    }
                    
                })
            }

            { 
                pages.length > Number(currentPage) + 3 ? 
                <>
                    <div>...</div>            
                    <Link 
                        to={`?page=${pages[pages.length - 1]}`} 
                        key={pages.length - 1} 
                        style={{color: pages[pages.length - 1] === Number(currentPage) ? '#ffe400' : '#0a0a0a'}}
                    >
                        {pages[pages.length - 1]}
                    </Link>
                </> : ''
            }
            
        </div>
    )
};

export default Pagination;
