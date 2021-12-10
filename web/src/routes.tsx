import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

/* O exact ajuda a de fato chegar no  /, porque o que ele verifica é se começa com / e quase todos começam com barra */
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path = "/" exact/> 
            <Route component={CreatePoint} path = "/create-point" exact/> 
        </BrowserRouter>
    );
}

export default Routes;