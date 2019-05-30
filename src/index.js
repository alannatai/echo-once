import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Submit from './components/submit/submit'; 
import Error from './Error';

ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/submit" component={Submit} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
