import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './layout/NavBar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/project/:id' component={ProjectDetails} />
                <Route path='/signin'  component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
