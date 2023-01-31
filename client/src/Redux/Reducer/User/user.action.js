import axios from 'axios'

import {ADD_USER,GET_USERS} from "./user.type"

export const addUser=(userData)=> async (dispatch)=>{
    try{
    const user =await axios({
    method:"POST",
    url:`${process.env.REACT_APP_CLIENT_URL}/user/add`,
    data:{user:userData}
       });
localStorage.setItem("Trialproject",JSON.stringify({user:user}))
return dispatch({type:ADD_USER,payload:userData})
    }
    catch(error){
return dispatch({type:"ERROR",payload:error})
    }
}

export const getUsers=(userData)=> async (dispatch)=>{
    try{
    const user =await axios({
    method:"GET",
    url:`${process.env.REACT_APP_CLIENT_URL}/user/`,
       });
       localStorage.setItem("Trialproject",JSON.stringify({user:user}))

return dispatch({type:GET_USERS,payload:userData})
    }
    catch(error){
return dispatch({type:"ERROR",payload:error})
    }
}