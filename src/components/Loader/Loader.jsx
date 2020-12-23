import React from 'react'
import s from './Loader.module.css'
import preloader from "../../img/load.gif";

const Loader = () => {
    return (
        <div className={s.preloader__blok}><img alt={""} className={s.preloader} src={preloader}/></div>
    );
}

export  default  Loader