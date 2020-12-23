const ADD_SMALL_DATA = 'ADD_SMALL_DATA'





let initialState = false

export const smallDataReduser = (state = initialState, action) => {
    if (action.type === ADD_SMALL_DATA) {
       return ([action.smallData])}
    return state
}

export const addSmallDataActionCreator = (smallData) => {
    return {type: ADD_SMALL_DATA, smallData: smallData}
}