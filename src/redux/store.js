import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { FavoriesReducer } from "./Reducers/InfoReducer";
import { UserReducer } from "./Reducers/UserReducer";


const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    user: UserReducer,
    favories: FavoriesReducer,
})


const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const favoriesItemFromLocalStorage = localStorage.getItem("favoriesItems")
 ? JSON.parse(localStorage.getItem("favoriesItems")):[]


const initialState ={
    user: {userInfo: userInfoFromLocalStorage},
    favories:{favoriesItems: favoriesItemFromLocalStorage}
}


const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;