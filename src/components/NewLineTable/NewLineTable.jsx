import React from "react";
import s from './NewLineTable.module.css'

let NewLineTable = (props) => {

    const marBlock = (data) => () => {
        props.setAddedUser(data)
    }

    let arr = []
    let data = props.data
    for (let key in data) {
        let a = (data[key])
        let addres = []
        if (key === 'phone') {
            arr.push(<td key={`${Math.random() * 1243567}`} onClick={marBlock(data)} className={s.phone}>{a}</td>)
        }
        else if (key === 'address') {
            for (let add in a) {
                addres.push(<div key={`${Math.random() * 1243567}`}>{add} : {a[add]}</div>)
            }
            arr.push(<td key={`${Math.random() * 1243567}`} onClick={marBlock(data)} className={s.address}>{addres}</td>)
        } else {
            arr.push(<td key={`${Math.random() * 1243567}`} onClick={marBlock(data)} className={s.column}>{a}</td>)
        }
        addres = []

    }
    return (
        <>
            {arr}
        </>
    )
}

export default NewLineTable

