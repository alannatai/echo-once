import { GET_SUBMIT_DATA } from '../actions/types';

const DEFAULT_STATE = {
    submitSecret: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_SUBMIT_DATA:
            return { ...state, submitSecret: action.payload }
        default:
            return state
    };
};
