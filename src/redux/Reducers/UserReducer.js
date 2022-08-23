import { GET_USER, LOGIN_USER, LOGOUT_USER } from "../Constants/UserConstants";

export const UserReducer = (state = { userInfo: [] }, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        case LOGOUT_USER:
            return{
                ...state,
                userInfo: []
            }
        case GET_USER:
            return{
                ...state,
                userInfo: action.payload
            }
        default:
           return state
    }
}