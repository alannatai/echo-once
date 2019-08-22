import axios from 'axios';
import { 
    AUTH_SIGN_UP, 
    AUTH_LOG_OUT, 
    AUTH_LOG_IN, 
    AUTH_ERROR,
    GET_SUBMIT_DATA } from './types';

//actionCreators

export const oauthFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/facebook', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
        axios.defaults.headers.common['Authorization'] = res.data.token;
    };
}

export const oauthGoogle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/google', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
        axios.defaults.headers.common['Authorization'] = res.data.token;
    };
}

export const signUp = data => {
    return async dispatch => {
        try {
            console.log('action creator sign up called')
            const res = await axios.post('http://localhost:4000/users/signup', data);

            console.log('action creator dispatched an action')
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already in use'
            })
        }
    };
}

export const logIn = data => {
    return async dispatch => {
        try {
            console.log('action creator log in called')
            const res = await axios.post('http://localhost:4000/users/login', data);

            console.log('action creator dispatched an action')
            dispatch({
                type: AUTH_LOG_IN,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email and password combination not valid'
            })
        }
    };
}

export const getSecret = () => {
    return async dispatch => {
        try {
            console.log('trying to getSecret')
            const res = await axios.get('http://localhost:4000/users/secret');
            console.log('res', res)

            dispatch({
                type: GET_SUBMIT_DATA,
                payload: res.data.secret
            })
        } catch (error) {
            console.error('error', error)
        }
    }
}

export const logOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        axios.defaults.headers.common['Authorization'] = '';

        dispatch({
            type: AUTH_LOG_OUT,
            payload: ''
        })
    };
}