import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Started from './pages/Started'

const Routes = () => {
    return(
        <BrowserRouter >
            <Route component={Home} path="/" exact />
            <Route component={Started} path="/started" />
        </BrowserRouter>
    )
}

export default Routes;