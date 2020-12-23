const LOAD_SWITCH = 'LOAD_SWITCH'


let initialState = false

export const loadReduser = (state = initialState, action) => {
    if (action.type === LOAD_SWITCH) {
        return action.isLoad
    }
    return state
}

export const switchLoaderActionCreator = (isLoad) => {
    return {type: LOAD_SWITCH, isLoad: isLoad}
}