import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from './App';
import NavBar from './components/navbar/navbar';
import Account from './components/account/account';
import Submit from './components/submit/submit';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Error from './Error';
import reducers from './reducers';

import authGuard from './HOComponents/authguard';

const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/submit" component={authGuard(Submit)} />
                    <Route path="/account" component={authGuard(Account)} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
