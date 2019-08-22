import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import submitReducer from './submit';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    submit: submitReducer
});