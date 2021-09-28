import types from "./types";

const favouritesReducer = (state = [], action) => {
    const {type,payload} = action;
    const {GOT_FAVOURITES_FROM_LOCAL_STORAGE,
        ADDED_TO_FAVS,
        REMOVED_FROM_FAVS,
    } = types

    switch (type){
        case GOT_FAVOURITES_FROM_LOCAL_STORAGE:
            return payload
        case ADDED_TO_FAVS:
            return payload
        case REMOVED_FROM_FAVS:
            return payload
        default:
            return state
    }
}

export default {
    favourites: favouritesReducer
}