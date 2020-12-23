import React from "react";
import s from './SearchData.module.css'

const SearchData = (props) => {
    let selectRef = React.createRef();
    let inputRef = React.createRef();
    let select = []
    for (const selectKey in props.selectData) {
        if (selectKey === 'address') {
            let state = ["streetAddress", "city", "state", "zip"]
            state = state.map(e => <option key={`${Math.random() * 1243567}`}>{e}</option>)
            select.push(state)
        } else {
            select.push(<option key={`${Math.random() * 1243567}`}>{selectKey}</option>)
        }
    }

    const withFilter = () => {
        if (props.nowPage !== 1) {
            props.setNum(0)
            props.setNowPage(1)
        }
        switch (selectRef.current.options[selectRef.current.options.selectedIndex].value) {
            case "id":
                props.setSearch({id: inputRef.current.value})
                break
            case "firstName":
                props.setSearch({firstName: inputRef.current.value})
                break
            case "lastName":
                props.setSearch({lastName: inputRef.current.value})
                break
            case "email":
                props.setSearch({email: inputRef.current.value})
                break
            case "phone":
                props.setSearch({phone: inputRef.current.value})
                break
            case "address":
                props.setSearch({address: inputRef.current.value})
                break
            case "description":
                props.setSearch({description: inputRef.current.value})
                break
            case "streetAddress":
                props.setSearch({streetAddress: inputRef.current.value})
                break
            case "city":
                props.setSearch({city: inputRef.current.value})
                break
            case "state":
                props.setSearch({state: inputRef.current.value})
                break
            case "zip":
                props.setSearch({zip: inputRef.current.value})
                break
            default :
                props.setSearch({zip: inputRef.current.value})
        }
    }
    return (
        <div>
            <select className={s.sel} ref={selectRef}>
                {select}
            </select>
            <input ref={inputRef} className={s.searchInput} type={"text"} placeholder={"Pls write something..."}/>
            <button onClick={withFilter} className={s.findButton}>Find</button>
        </div>
    )
}


export default SearchData