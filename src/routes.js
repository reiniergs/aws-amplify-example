import React from 'react';
import {
    Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import history from './history';
import AuthRoute from './components/auth-route';
import PublicRoute from './components/public-route';
import SignIn from './components/sign-in';
import AuthApp from './components/auth-app';

export default function Routes({ isAuth }) {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Redirect from="/" exact to="/home"/>
                    <PublicRoute component={SignIn} isAuth={isAuth} />
                    <AuthRoute component={AuthApp} isAuth={isAuth} />
                </Switch>
            </div>
        </Router>
    )
}
