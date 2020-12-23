import React from 'react'

const AddedUser = (props) => {


    if(props.data) {
        return (
            <div>
               <div>Выбран пользователь <b>{props.data.firstName} {props.data.lastName}</b></div>
                <div>Описание:</div>
                <textarea>{props.data.description}</textarea>
                <div>Адрес проживания: <b>{props.data.address.streetAddress}</b></div>
                <div>Город: <b>{props.data.address.city}</b></div>
                <div>Провинция/штат: <b>{props.data.address.state}</b></div>
                <div>Индекс: <b>{props.data.address.zip}</b></div>
                <div>Номер: <b>{props.data.phone}</b></div>
            </div>
        )
    } else {
        return <></>
    }
}

export default AddedUser