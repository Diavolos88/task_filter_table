import React from 'react'
import s from './ErrorMessage.module.css'

const ErrorMessage = (props) => {

    return (
        <div className={s.error}>
            {props.data}
        </div>
    )
}

export default ErrorMessage
