import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Verification from './verification';

export default function PublicRoutes(props) {
    const {
        className,
        style,
    } = props;
    return (
        <Switch className={className} style={style} >
            <Redirect from="/home" exact to="/home/signin" />
            <Route path="/home/signin" component={SignIn} />
            <Route path="/home/signup" component={SignUp} />
            <Route path="/home/verification" component={Verification} />
        </Switch>
    );
}
