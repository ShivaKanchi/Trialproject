import axios from 'axios'

import { ADD_USER, GET_USERS, SEARCH_USER, DELETE_USER, UPDATE_USER } from "./user.type"

//thunk function returns function and thunk takes dispatch as input
export const addUser = (userData) => async (dispatch) => {
    try {
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
        //localStorage.setItem("Trialproject", JSON.stringify({ users: users }))
        console.log( "From action user",users.data.data)
        return dispatch({
            type: GET_USERS,
            payload: users.data.data
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}


export const searchUser = () => async (dispatch) => {
    try {
        const users = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/all`,
        });
        //localStorage.setItem("Trialproject", JSON.stringify({ users: users }))
        // console.log(users, "From action user")
        return dispatch({
            type: GET_USERS,
            payload: users.data.users
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const deleteUser = () => async (dispatch) => {
    try {
        const users = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/all`,
        });
        //localStorage.setItem("Trialproject", JSON.stringify({ users: users }))
        // console.log(users, "From action user")
        return dispatch({
            type: GET_USERS,
            payload: users.data.users
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const updateUser = () => async (dispatch) => {
    try {
        const users = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/all`,
        });
        //localStorage.setItem("Trialproject", JSON.stringify({ users: users }))
        // console.log(users, "From action user")
        return dispatch({
            type: GET_USERS,
            payload: users.data.users
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}