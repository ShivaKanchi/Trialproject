import { ADD_USER,GET_USERS } from "./user.type";
const intialState={};

const userReducer =(state=intialState,action)=>{
    switch(action.type){
        case ADD_USER: return{
            ...state,
            ...action.payload
        };
        case GET_USERS: return{
            ...state,
            ...action.payload
        };
        default:return{
            ...state
        }
    }
}

export default userReducer