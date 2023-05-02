import isEmpty from "../../util/isEmpty";
import { SET_USER } from "../type";

const initialState = {
    isConnected: false,
    user: {}
}
function AuthReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isConnected: isEmpty(action.payload),
                user: action.payload
            };


        default:
            return state
    }
}
export default AuthReducer
