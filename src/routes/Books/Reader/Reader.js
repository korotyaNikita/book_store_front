import React, { useContext, useEffect, useState } from "react"
import classes from "./../../../style.module.scss"
import Navbar from "../../../modules/Navigation/Navbar";
import Control from "../../../modules/Navigation/Control";
import ContextData from "../../../context/Data/ContextData";
import itemsFetch from "../../../actions/ItemsFetch";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../modules/Pagination/Pagination";

const Reader = () => {
    const { stateData, dispatchData } = useContext(ContextData)
    const content = stateData.item
    const params = useParams()
    const [itemsPerPage, setItemsPerPage] = useState(10000)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get("page")
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const [index, setIndex] = useState(1)

    useEffect(() => {
        itemsFetch(`/books/${params.id}/reader`, dispatchData, 'FETCH_ITEM')
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper} >
                    <select onChange={(e) => setIndex(e.target.selectedIndex)} >
                    <option disabled >Глави</option>
                        {
                            content?.map((elem, index) => {
                                return (
                                    <option value={elem.id} key={index}>{elem.title}</option>
                                    )
                                })
                            }
                    </select>
                    <Pagination 
                        totalItems={ content[index-1]?.text.length } 
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                    />
                    <div dangerouslySetInnerHTML={{__html: content[index-1]?.text.slice(firstItemIndex, lastItemIndex)}}>
                    </div>
                    <Pagination 
                        totalItems={ content[index-1]?.text.length } 
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )
};

export default Reader;
