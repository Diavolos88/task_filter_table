const ADD_BIG_DATA = 'ADD_BIG_DATA'





let initialState = false

export const bigDataReduser = (state= initialState, action) => {
    if (action.type === ADD_BIG_DATA) {
       return ( [ action.bigData]) }
    return state
}

export const addBigDataActionCreator = (bigData) => {
    return {type: ADD_BIG_DATA, bigData: bigData}
}