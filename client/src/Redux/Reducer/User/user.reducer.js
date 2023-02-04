import { ADD_USER, GET_USERS } from "./user.type";
const intialState = {
    users: [],
    user: {}
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_USER: return {
            ...state,
            user: action.payload
        };
        case GET_USERS: return {
            ...state,
            users: action.payload
        };
        default: return {
            ...state
        }
    }
}

export default userReducer