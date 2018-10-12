import React from 'react';
import {
    Router,
    Redirect,
    Switch,
} from 'react-router-dom';
import history from './history';
import AuthRoute from './components/experiences/auth-route';
import PublicRoute from './components/experiences/public-route';
import PublicRoutes from './components/pages/public';
import AuthApp from './components/pages/auth';

export default function Routes({ isAuth }) {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Redirect from="/" exact to="/signin"/>
                    <PublicRoute component={PublicRoutes} isAuth={isAuth} />
                    <AuthRoute component={AuthApp} isAuth={isAuth} />
                </Switch>
            </div>
        </Router>
    )
}
