import { 
    AUTH_SIGN_UP, 
    AUTH_LOG_OUT, 
    AUTH_LOG_IN, 
    AUTH_ERROR } from '../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            console.log('auth reducer got an AUTH_SIGN_UP action')
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOG_IN:
            console.log('auth reducer got an AUTH_LOG_IN action')
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOG_OUT:
            console.log('auth reducer got an AUTH_SIGN_OUT action')
            return { ...state, token: action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR:
            console.log('auth reducer got an AUTH_ERROR action')
            return { ...state, errorMessage: action.payload }
        default:
            return state
    };
};
