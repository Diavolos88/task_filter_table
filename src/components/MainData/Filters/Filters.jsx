import React from 'react'
import s from './Filters.module.css'

const Filters = (props) => {

    const data = []

    let keys
    for (const dataKey in props.filter) {
        keys = dataKey
    }

    const setNewFilter = (key) => () => {

        switch (key){
            case "id":
                props.setFilters({id: keys === 'id' ? (!props.filter[keys]) : true})
                break
            case "firstName":
                props.setFilters({firstName: keys === 'firstName' ? (!props.filter[keys]) : true})
                break
            case "lastName":
                props.setFilters({lastName: keys === 'lastName' ? (!props.filter[keys]) : true})
                break
            case "email":
                props.setFilters({email: keys === 'email' ? (!props.filter[keys]) : true})
                break
            case "phone":
                props.setFilters({phone: keys === 'phone' ? (!props.filter[keys]) : true})
                break
            case "address":
                props.setFilters({address: keys === 'address' ? (!props.filter[keys]) : true})
                break
            case "description":
                props.setFilters({description: keys === 'description' ? (!props.filter[keys]) : true})
                break
            default:
                props.setFilters({description: keys === 'description' ? (!props.filter[keys]) : true})
        }
    }

    for (let key in props.data) {
        data.push(<td key={`${Math.random() * 1243567}`} onClick={setNewFilter(key)} className={s.column}>{props.data[key]}<span className={keys === key ? (props.filter[keys] ? s.up : s.down) : s.hidden}>▲</span></td>)
    }
    return (
        <tr>
            {data}
        </tr>
    )
}

export default Filters