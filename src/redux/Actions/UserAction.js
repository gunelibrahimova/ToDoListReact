import { BASE_URL } from "../../api/Config"
import { LOGIN_USER, LOGOUT_USER } from "../Constants/UserConstants";
import { GET_USER } from './../Constants/UserConstants';

export const loginUserAction = (email, password) => async (dispach, getState) => {
    var user = await fetch(`${BASE_URL}Auth/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                email: email,
                password:password
            }
        )
    }).then(response => response.json())
    if (user.status === 200) {
        localStorage.setItem("userInfo",JSON.stringify(user.message))
    }
    dispach({
        type: LOGIN_USER,
        payload: user
    })
}

export const logoutUserAction = () => async (dispach, getState) =>{
    localStorage.removeItem("userInfo");
    dispach({
        type: LOGOUT_USER,
    })
}

export const getUserAction = () => async(dispach,getState) =>{
    try{
        var user = JSON.parse(localStorage.getItem("userInfo")) 
        let data = await (await fetch(`${BASE_URL}Auth/getbyemail`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })).json()
        dispach({
            type: GET_USER,
            payload: data
        })
    }
    catch(error){
        dispach({
            type: GET_USER,
            payload: []
        })
    }
}