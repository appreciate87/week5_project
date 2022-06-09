import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import users from "./modules/users";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";



// const middlewares = [thunk];
const rootReducer = combineReducers({users});

// const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer);

export default store;