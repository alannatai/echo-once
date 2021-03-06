import axios from 'axios';
import {
    AUTH_SIGN_UP,
    AUTH_LOG_OUT,
    AUTH_LOG_IN,
    AUTH_ERROR,
    GET_SUBMIT_DATA,
    GET_ACCOUNT_DATA,
    AUTH_LINK_FACEBOOK,
    AUTH_LINK_GOOGLE,
    AUTH_UNLINK_FACEBOOK,
    AUTH_UNLINK_GOOGLE
} from './types';

//actionCreators

export const oauthFacebook = data => {
    return async dispatch => {
        await axios.post('http://localhost:4000/users/oauth/facebook', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP
        });
    };
}

export const oauthGoogle = data => {
    return async dispatch => {
        await axios.post('http://localhost:4000/users/oauth/google', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP
        });
    };
}

export const linkFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/link/facebook', {
            access_token: data
        });

        dispatch({
            type: AUTH_LINK_FACEBOOK,
            payload: res.data
        });
    };
}

export const linkGoogle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/link/google', {
            access_token: data
        });

        dispatch({
            type: AUTH_LINK_GOOGLE,
            payload: res.data
        });
    };
}

export const unlinkFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/unlink/facebook');

        dispatch({
            type: AUTH_UNLINK_FACEBOOK,
            payload: res.data
        });
    };
}

export const unlinkGoogle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:4000/users/oauth/unlink/google');

        dispatch({
            type: AUTH_UNLINK_GOOGLE,
            payload: res.data
        });
    };
}

export const signUp = data => {
    return async dispatch => {
        try {
            await axios.post('http://localhost:4000/users/signup', data);

            dispatch({
                type: AUTH_SIGN_UP
            });
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
            await axios.post('http://localhost:4000/users/login', data);

            dispatch({
                type: AUTH_LOG_IN
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email and password combination not valid'
            })
        }
    };
}

export const checkAuth = () => {
    return async dispatch => {
        try {
            await axios.get('http://localhost:4000/users/status');

            dispatch({
                type: AUTH_LOG_IN
            });
            console.log('user is authenticated')
        } catch (error) {
            console.log('error', error)
        }
    };
}

export const getSubmitSecret = () => {
    return async dispatch => {
        try {
            console.log('trying to getSubmitSecret')
            const res = await axios.get('http://localhost:4000/users/submit');

            dispatch({
                type: GET_SUBMIT_DATA,
                payload: res.data.submitSecret
            })
        } catch (error) {
            console.error('error', error)
        }
    }
}

export const getAccountSecret = () => {
    return async dispatch => {
        try {
            console.log('trying to getAccountSecret')
            const res = await axios.get('http://localhost:4000/users/account');

            dispatch({
                type: GET_ACCOUNT_DATA,
                payload: res.data
            })
        } catch (error) {
            console.error('error', error)
        }
    }
}

export const logOut = () => {
    return async dispatch => {
        await axios.get('http://localhost:4000/users/logout');
        dispatch({
            type: AUTH_LOG_OUT
        })
    };
}