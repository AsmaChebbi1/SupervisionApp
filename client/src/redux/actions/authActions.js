import axios from 'axios';
import { ERRORS, SET_USER } from '../type';
import jwt_decode from 'jwt-decode';


export const Registration = (form, navigate) => dispatch => {
    axios.post('/api/register', form)
        .then(res => {
            navigate('/connection')
            dispatch({
                type: ERRORS,
                payload: {}
            })
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        })
}

export const LoginAction = (form, navigate) => dispatch => {
    axios.post('/api/login', form)
        .then(res => {
            
            const { token } = res.data;
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token);
            dispatch(setUser(decode));
            if(decode.role==="superviseur"){
                navigate('/superviseur');
            }else{ 
             if(decode.role==="agent"){
             navigate('/agent');}
            } 
            

         } )
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        })
}

export const Logout = (navigate) => dispatch => {
    localStorage.removeItem('jwt')
    navigate('/connection')

    dispatch({
        type: SET_USER,
        payload: {}
    })
    //navigate('/connection')
    
}
export const setUser = (decode) => ({
    type: SET_USER,
    payload: decode
})