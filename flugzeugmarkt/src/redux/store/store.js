import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import goodsReducers from './../features/goods/index'
import favouritesReducer from './../features/favourites/index'
import cartReducers from './../features/cart/index'
import modalReducers from './../features/modal/index'

const rootReducer = combineReducers({
    ...goodsReducers,
    ...favouritesReducer,
    ...cartReducers,
    ...modalReducers
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store