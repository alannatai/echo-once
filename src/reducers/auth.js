import { 
    AUTH_SIGN_UP, 
    AUTH_LOG_IN, 
    AUTH_LOG_OUT,
    AUTH_ERROR } from '../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return { ...state, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOG_IN:
            return { ...state, isAuthenticated: true, errorMessage: '' }
        case AUTH_LOG_OUT:
            return { ...state, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    };
};
