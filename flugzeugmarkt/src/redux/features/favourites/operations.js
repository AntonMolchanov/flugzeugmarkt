import actions from "./actions";

const getFavourites = () => (dispatch) => {
    let localStorageData = JSON.parse(localStorage.getItem('favourites'))
    if (!localStorageData){
        return
    }
    else{
        dispatch(actions.getFavourites(localStorageData))
    }
}

const addToFavs = (id) => (dispatch,getState) => {
    const favourites = getState().favourites;
    const updatedFavourites = [...favourites, id]
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    dispatch(actions.addToFavs(updatedFavourites))
}

const removeFromFavs = (id) => (dispatch, getState) => {
    const favourites = getState().favourites
    const updatedFavourites = favourites.filter(favId => favId !== id)
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    dispatch(actions.removeFromFavs(updatedFavourites))
}


export default {
    getFavourites,
    addToFavs,
    removeFromFavs
}