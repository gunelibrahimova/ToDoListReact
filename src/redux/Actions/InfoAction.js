import { BASE_URL } from "../../api/config"
import { ADD_TO_DO, GET_TO_DO, REMOVE_TO_DO } from "../Constants/ToDoConstants"


export const addToFavoriesAction = (id,quantity=1) => async (dispach, getState) => {
    const data = await (await fetch(`${BASE_URL}ToDo/getbyid/${id}`)).json()
    const product = {
        id: data.message.id,
        title: data.message.title,
        description: data.message.description,
        quantity: quantity
      }
    dispach({
        type: ADD_TO_DO,
        payload: product
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))

}

export const removeFromFavories = (id) => (dispach,getState) => {
    dispach({
        type: REMOVE_TO_DO,
        payload: id
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))
}


export const getFavoriesItems = () => async (dispach, getState) => {
    var data = JSON.parse(localStorage.getItem("favoriesItems"))
    dispach({
        type: GET_TO_DO,
        payload: data
    })
}

// export const removeAllCartAction = () => async (dispach,getState) => {
//     localStorage.removeItem("cartItems")
//     dispach({
//         type:REMOVE_ALL_CART,
        
//     })
// }