import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import BasicDB from './components/forms/dbForms/BasicDB';
import BasicSL from './components/forms/slForms/BasicSL';
import BasicTB from './components/forms/tbForms/BasicTB';

const Routes = (props) => {

    return (
        <BrowserRouter>

            <Route path='/' component={Header} />
            <Route path='/db' component={BasicDB} />
            <Route path='/tb' component={BasicTB} />
            <Route path='/sl' component={BasicSL} />

        </BrowserRouter>
    )
}

export default Routes;