import {combineReducers, createStore} from "redux";
import {smallDataReduser} from "./smallDataReduser";
import {bigDataReduser} from "./bigDataReduser";

let reducers = combineReducers({
    smallData: smallDataReduser,
    bigData: bigDataReduser
})

const store = createStore(reducers);

export default store