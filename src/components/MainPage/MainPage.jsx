import React, {useState} from 'react';
import {connect} from "react-redux";
import {addSmallDataActionCreator} from "../../Redux/smallDataReduser";
import {addBigDataActionCreator} from "../../Redux/bigDataReduser";
import {loadBigDataApi, loadSmallDataApi} from "../../API/Api";
import s from './MainPage.module.css'
import MainData from "../MainData/MainData";
import AddForm from "../AddForm/AddForm";
import {switchLoaderActionCreator} from "../../Redux/loadReduser";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MainPage = (props) => {
    const [data, setData] = useState(false)
    const [view, setView] = useState(false)
    const [newItems, setNewItems] = useState(false)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    const loadSmallData = async () => {
        setLoad(true)
        setError(false)
        try {
            const tmp = await loadSmallDataApi()
            props.addSmallDataActionCreator(tmp)
            setData(tmp)
            setNewItems(false)
        } catch (e) {
            setError("Some error with Network")
        } finally {
            setLoad(false)
        }
    }

    const loadBigData = async () => {
        setError(false)
        setLoad(true)
        try {
            const tmp = await loadBigDataApi()
            props.addBigDataActionCreator(tmp)
            setData(tmp)
            setNewItems(false)
        } catch (e) {
            setError("Some error with Network")
        } finally {
            setLoad(false)
        }
    }

    const addItem = () => {
        setView(view ? false : true)
    }

    const addNewItem = (item) => {
        let tmp = [item]
        tmp = tmp.concat(newItems)
        setNewItems(tmp)
        if (data.data) {
            // eslint-disable-next-line array-callback-return
            data.data = tmp.filter(e => {
                if (e) {
                    return e
                }
            }).concat(data.data)
            let copy = {...data}
            setData(copy)
        } else {
            setData({
                // eslint-disable-next-line array-callback-return
                data: tmp.filter(e => {
                    if (e) {
                        return e
                    }
                })
            })
        }

        setNewItems(false)
    }

    return (
        <div className={s.buttonBlock}>
            <button className={s.mainButton} onClick={loadSmallData}>Load small data</button>
            <button className={s.mainButton} onClick={loadBigData}>Load big data</button>
            <button className={s.mainButton} onClick={addItem}>Add item</button>
            <AddForm addNewItem={addNewItem} view={view}/>
            {error ? <ErrorMessage data={error}/> : load ? <Loader/> : <MainData data={data} newItems={newItems}/>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        smallData: state.smallData,
        bigData: state.bigData,
        isLoad: state.isLoader
    }
}

export default connect(mapStateToProps, {
    addSmallDataActionCreator,
    addBigDataActionCreator,
    switchLoaderActionCreator
})(MainPage)