import types from "./types";

const modalReducers = (state = null, action) =>{
    const {type, payload} = action
    const {OPENED_MODAL,CLOSED_MODAL} = types
    switch (type){
        case OPENED_MODAL:
            return payload
        case CLOSED_MODAL:
            return payload
        default:
            return state
    }
}

export default {
    modal: modalReducers
}