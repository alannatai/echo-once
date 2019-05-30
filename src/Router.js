import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Submit from './components/submit/submit'; 
import Error from './Error';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/submit" component={Submit} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
};