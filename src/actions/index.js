import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_ERROR } from './types';

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
        } catch(error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already in use'
            })
        }
    };
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    };
}