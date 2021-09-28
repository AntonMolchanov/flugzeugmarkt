import types from "./types";

const getFavourites = (favouritesFromLS) => ({
    type: types.GOT_FAVOURITES_FROM_LOCAL_STORAGE,
    payload: favouritesFromLS
})

const addToFavs = (id) => ({
    type: types.ADDED_TO_FAVS,
    payload: id
})

const removeFromFavs = (id) => ({
    type: types.REMOVED_FROM_FAVS,
    payload: id
})



export default {
    getFavourites,
    addToFavs,
    removeFromFavs,
}
