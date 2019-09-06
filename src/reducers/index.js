import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import submitReducer from './submit';
import accountReducer from './account';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    submit: submitReducer,
    account: accountReducer
});