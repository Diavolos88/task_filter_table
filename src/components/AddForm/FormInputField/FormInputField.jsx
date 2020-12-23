import React from 'react'

const FormInputField = (props) => {

    return (
        <div>
            <div>{props.lable}:</div>
            <input onChange={props.onChange} className={props.className} ref={props.linkRef} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default FormInputField