import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home'
import Started from './pages/Started'
import { VideoOne, VideoTwo, VideoTre, VideoFou } from './pages/Videos';

const Routes = () => {
    return(
        <BrowserRouter >
            <Route component={Home} path="/" exact />
            <Route component={Started} path="/started" exact/>
            <Route component={VideoOne} path="/started/video/1" exact/>
            <Route component={VideoTwo} path="/started/video/2" exact/>
            <Route component={VideoTre} path="/started/video/3" exact/>
            <Route component={VideoFou} path="/started/video/4" exact/>
        </BrowserRouter>
    )
}

export default Routes;