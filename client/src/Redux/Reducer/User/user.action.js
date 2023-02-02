import axios from 'axios'

import { ADD_USER, GET_USERS } from "./user.type"

export const addUser = (userData) => async (dispatch) => {
    try {
        console.log(process.env.REACT_APP_CLIENT_URL, "from axios user.action")
        const user = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/add`,
            data: { user: userData }
        });
        localStorage.setItem("Trialproject", JSON.stringify({ user: user }))
        return dispatch({ type: ADD_USER, payload: userData })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getUsers = () => async (dispatch) => {
    try {
        const users = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/all`,
        });
        //  localStorage.setItem("Trialproject", JSON.stringify({ users: users }))
        console.log(users, "From action user")
        return dispatch({
            type: GET_USERS,
            payload: users.data.users
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}