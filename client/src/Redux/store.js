import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from "redux-logger";
import rootReducer from "./Reducer/rootReducer"

// const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    //  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store;