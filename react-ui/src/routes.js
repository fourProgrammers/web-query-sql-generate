import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/layouts/Header';

import DBCreate from './components/forms/dbForms/DBCreate';
import DBDrop from './components/forms/dbForms/DBDrop';


const Routes = (props) => {

    return (
        <BrowserRouter>
            
            <Route path='/' component={Header} />

            <Route path='/db/create' component={DBCreate} />
            <Route path='/db/drop' component={DBDrop} />

        </BrowserRouter>
    );
};

export default Routes;