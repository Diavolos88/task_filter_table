import React, {useState} from 'react'
import s from './AddForm.module.css'
import FormInputField from "./FormInputField/FormInputField";

const AddForm = (props) => {
    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();
    let streetAddress = React.createRef();
    let city = React.createRef();
    let state = React.createRef();
    let zip = React.createRef();
    let description = React.createRef();
    let arr = [id, firstName, lastName, email, phone, streetAddress, city, state, zip, description]
    let [disable, setDisable] = useState(true)

    const addNewItem = () => {
        let item = {
            id: Number(id.current.value),
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: {
                streetAddress: streetAddress.current.value,
                city: city.current.value,
                state: state.current.value,
                zip: zip.current.value
            },
            description: description.current.value
        }
        props.addNewItem(item)
    }

    const checkDisable = () => {
        let num = 0
        arr.forEach( e => {
            if (e.current.value.length > 0) {
                num += 1
            }
        })
        if (num === arr.length) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div className={!props.view ? s.hide : s.borderBlock}>
            <div className={s.tableDiv}>
                <div></div>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"id"} placeholder={"write id..."} linkRef={id}
                                type={"number"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"first name"} placeholder={"write first name..."}
                                linkRef={firstName} type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"last name"} placeholder={"write last name..."}
                                linkRef={lastName} type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"email"} placeholder={"write email..."} linkRef={email}
                                type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"phone"} placeholder={"write phone..."} linkRef={phone}
                                type={"number"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"street address"} placeholder={"write street..."}
                                linkRef={streetAddress} type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"city"} placeholder={"write city..."} linkRef={city}
                                type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"state"} placeholder={"write state..."} linkRef={state}
                                type={"text"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"zip"} placeholder={"write zip..."} linkRef={zip}
                                type={"number"}/>
                <FormInputField onChange={checkDisable} className={s.inputField} lable={"description"} placeholder={"write description..."}
                                linkRef={description} type={"text"}/>
                <div></div>
            </div>
            <button onClick={addNewItem} disabled={disable}>Add item</button>
        </div>
    )
}
export default AddForm