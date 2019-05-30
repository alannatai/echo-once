import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import NavBar from './components/navbar/navbar';
import About from './components/about/about';
import Submit from './components/submit/submit';
import Login from './components/login/login';
import Error from './Error';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/about" component={About} />
                <Route path="/submit" component={Submit} />
                <Route path="/login" component={Login} />
                <Route component={Error} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
