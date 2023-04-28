import * as types from "./actionType";


const initialState = {
    carts: [],
    loading: false
}


const usersReducers = (state = initialState, action) => {
    switch (action.type) {      
        case types.ADD_TO_CART:
            return {
                ...state,
                loading: false,
            }
            case types.GET_CART:
            return {
                ...state,
                carts: action.payload,
                loading: false,
            }
       
        default:
            return state;
    }
};

export default usersReducers; 