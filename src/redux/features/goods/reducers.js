import types from "./types";

const goodsReducer = (state = [], action) => {
    const {type, payload} = action;
    const {GOT_GOODS} = types;

    switch (type){
        case GOT_GOODS:
            return payload
        default: return state;
    }
}

export default {
    goods: goodsReducer
}

