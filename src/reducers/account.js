import {
    GET_ACCOUNT_DATA,
    AUTH_LINK_FACEBOOK,
    AUTH_LINK_GOOGLE,
    AUTH_UNLINK_FACEBOOK,
    AUTH_UNLINK_GOOGLE
} from '../actions/types';

const DEFAULT_STATE = {
    accountSecret: '',
    methods: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_LINK_FACEBOOK:
            return { ...state, methods: action.payload.methods }
        case AUTH_LINK_GOOGLE:
            return { ...state, methods: action.payload.methods }
        case AUTH_UNLINK_FACEBOOK:
            return { ...state, methods: action.payload.methods }
        case AUTH_UNLINK_GOOGLE:
            return { ...state, methods: action.payload.methods }
        case GET_ACCOUNT_DATA:
            return { ...state, accountSecret: action.payload.accountSecret, methods: action.payload.methods }
        default:
            return state
    };
};
