import { combineReducers } from "redux";
import AuthReducer from './authReducer';
import ErrorsReducer from './errorsReducer';

export default combineReducers(
    {
        auth: AuthReducer,
        errors: ErrorsReducer
    }
)