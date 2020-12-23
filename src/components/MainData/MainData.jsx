import React, {useState} from 'react'
import NewLineTable from "../NewLineTable/NewLineTable";
import s from './MainData.module.css'
import Filters from "./Filters/Filters";
import SearchData from "../SearchData/SearchData";
import AddedUser from "../AddedUser/AddedUser";

const sortWithFilters = (arr, filters, search) => {
    if (search) {
        let searchKey
        for (const filtersKey in search) {
            searchKey = filtersKey
        }
        if (searchKey === "streetAddress" || searchKey === "city" || searchKey === "state" || searchKey === "zip") {
            // eslint-disable-next-line array-callback-return
            arr = arr.filter(e => {
                if (e["address"][searchKey].toString().toLowerCase().indexOf(search[searchKey].toLowerCase()) !== -1) {
                    return e
                }
            })
        } else {
            // eslint-disable-next-line array-callback-return
            arr = arr.filter(e => {
                if (e[searchKey].toString().toLowerCase().indexOf(search[searchKey].toLowerCase()) !== -1) {
                    return e
                }
            })
        }
    }
    for (const mainDataKey in filters) {
        if (filters[mainDataKey]) {
            arr.sort(function (a, b) {
                if (mainDataKey === 'id') {
                    let x = a[mainDataKey];
                    let y = b[mainDataKey];
                    return x < y ? -1 : x > y ? 1 : 0
                } else if (mainDataKey === 'address') {
                    let x = a[mainDataKey]['streetAddress'].toLowerCase();
                    let y = b[mainDataKey]['streetAddress'].toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                } else {
                    let x = a[mainDataKey].toLowerCase();
                    let y = b[mainDataKey].toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                }
            });
        } else {
            arr.sort(function (a, b) {
                if (mainDataKey === 'id') {
                    let x = a[mainDataKey];
                    let y = b[mainDataKey];
                    return x > y ? -1 : x < y ? 1 : 0
                } else if (mainDataKey === 'address') {
                    let x = a[mainDataKey]['streetAddress'].toLowerCase();
                    let y = b[mainDataKey]['streetAddress'].toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                } else {
                    let x = a[mainDataKey].toLowerCase();
                    let y = b[mainDataKey].toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                }
            });
        }
    }
    return arr
}

const MainData = (props) => {
    let [num, setNum] = useState(0)
    let [nowPage, setNowPage] = useState(1)
    let [filters, setNowFilters] = useState({id: true})
    let [search, setSearch] = useState(false)
    let [addedUser, setAddedUser] = useState(false)
    const firsLine = {
        id: "id",
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
        phone: "phone",
        address: "address",
        description: "description"
    }

    const changeState = (e) => () => {
        setNowPage(e)
        setNum(e - 1)
    }

    if (props.data) {
        if (props.data.data.length <= 50) {
            let arr = props.data.data
            arr = sortWithFilters(arr, filters, search)
            arr = arr.map(tr => (<tr key={`${Math.random() * 1243567}`}><NewLineTable  setAddedUser={setAddedUser} data={tr}/></tr>))
            return (
                <div>
                    <SearchData selectData={firsLine} setSearch={setSearch} nowPage={nowPage} setNowPage={setNowPage}
                                setNum={setNum}/>
                    <table>
                        <tbody>
                        <Filters filter={filters} setFilters={setNowFilters} data={firsLine}/>
                        {arr}
                        </tbody>
                    </table>
                    <AddedUser data={addedUser}/>
                </div>
            )
        }
    else
        {
            let arr = props.data.data
            arr = sortWithFilters(arr, filters, search)
            let len = arr.length
            arr = arr.slice(num * 50, (num + 1) * 50).map(tr => <tr key={`${Math.random() * 1243567}`}><NewLineTable
                setAddedUser={setAddedUser} data={tr}/></tr>)
            let nums = []
            let end = Math.ceil(len / 50)
            for (let i = 1; i < end + 1; i++) {
                nums.push(<span onClick={changeState(i)}
                                key={`${Math.random() * 1243567}`}     className={i === nowPage ? s.pagenatorNow : s.pagenator}>{i}</span>)
            }
            return (
                <div>
                    <SearchData selectData={firsLine} setSearch={setSearch} nowPage={nowPage} setNowPage={setNowPage}
                                setNum={setNum}/>
                    <table>
                        <tbody>
                        <Filters filter={filters} setFilters={setNowFilters} data={firsLine}/>
                        {arr}
                        </tbody>
                    </table>
                    <AddedUser data={addedUser}/>
                    <div>{nums}</div>
                </div>
            )
        }
    } else
        {
            return <div></div>
        }
}


    export default MainData