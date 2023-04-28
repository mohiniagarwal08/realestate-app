import {combineReducers} from "redux";
import usersReducers from "./reducer";

const rootReducer = combineReducers({
    carts: usersReducers
});

export default rootReducer;