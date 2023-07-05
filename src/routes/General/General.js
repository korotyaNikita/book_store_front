import React, { useContext, useEffect } from "react";
import classes from "./../../style.module.scss"
import Navbar from './../../modules/Navigation/Navbar';
import Control from "../../modules/Navigation/Control";
import useAuthContext from "../../context/Auth/AuthContext";
import http from "../../actions/axios";
import ContextData from "../../context/Data/ContextData";
import itemsFetch from "../../actions/ItemsFetch";
import { Link } from "react-router-dom";

const General = () => {
    const { user } = useAuthContext()
    const {stateData, dispatchData} = useContext(ContextData)
    console.log(stateData)

    useEffect(() => {
        itemsFetch('/', dispatchData, 'FETCH_ITEMS')
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <Navbar />
                <Control />
            </div>
            <div className={classes.container__content}>
                <div className={classes.content_wrapper}>
                    <div>
                        <h1>Нові надходження</h1>
                        
                            <div className={classes.books_wrapper}>
                                <div>
                                    <img src="http://localhost:8000/storage/images/dbd9db6477e2b952ce8914af319d97e3.avif"></img>
                                    <p><Link>Книга3</Link></p>
                                </div>
                                <div>
                                    <img src="http://localhost:8000/storage/images/b7873dcfad404b367febbe9d2ebcb7f0.avif"></img>
                                    <p><Link>Книга тест</Link></p>
                                </div>
                                <div>
                                    <img src="http://localhost:8000/storage/images/a24112f51738e6c4c39ef0f78c809fa8.jpeg"></img>
                                    <p><Link>Нова книга</Link></p>
                                </div>
                                <div>
                                    <img src="http://localhost:8000/storage/images/caf56547b6d576ff06cc03223c11ead6.jpeg"></img>
                                    <p><Link>Нова книга2</Link></p>
                                </div>
                            </div>
                    </div>
                    <div>
                        <h1>Набирають популярність</h1>
                        <div className={classes.books_wrapper}>
                            <div>
                                <img src="http://localhost:8000/storage/images/a24112f51738e6c4c39ef0f78c809fa8.jpeg"></img>
                                <p><Link>Нова книга2</Link></p>
                            </div>
                            <div>
                                <img src="http://localhost:8000/storage/images/caf56547b6d576ff06cc03223c11ead6.jpeg"></img>
                                <p><Link>Нова книга</Link></p>
                            </div>
                            <div>
                                <img src="http://localhost:8000/storage/images/dbd9db6477e2b952ce8914af319d97e3.avif"></img>
                                <p><Link>Книга тест</Link></p>
                            </div>
                            <div>
                                <img src="http://localhost:8000/storage/images/b7873dcfad404b367febbe9d2ebcb7f0.avif"></img>
                                <p><Link>Книга3</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.sidebar}>
                    <div>
                        <h1>Останні блоги</h1>
                        <div>
                            <h3><Link>Новий блог</Link></h3>
                            <p>
                                Джордж Вестон саме пив воду, і ця заява просто ошелешила його. 
                            </p>
                        </div>
                        <div>
                            <h3><Link>sdfdsfsd</Link></h3>
                            <p>sdfsdfsdf</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default General;