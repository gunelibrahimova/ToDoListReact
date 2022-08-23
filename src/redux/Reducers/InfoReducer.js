import { ADD_TO_DO, GET_TO_DO, REMOVE_TO_DO } from "../Constants/InfoConstants";

export const FavoriesReducer = (state = { favoriesItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            let item = action.payload;
            let myCart = state.favoriesItems.find(c => c.id === item.id);
            if (myCart) {
                return {
                    ...state,
                    favoriesItems: state.favoriesItems.map((a) => a.id === myCart.id ? item : a)
                }
            } else {
                return {
                    ...state,
                    favoriesItems: [...state.favoriesItems, item]
                }
            }
        case REMOVE_TO_DO:
            
                return {
                    ...state,
                    favoriesItems: state.favoriesItems.filter((x) => x.product !== action.payload)
                }
           
        case GET_TO_DO:
            return {
                ...state,
                favories: action.payload
            }
            
        
        default:
            return state
    }
}