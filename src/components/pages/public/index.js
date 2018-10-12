import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './sign-in';
import SignUp from './sign-up';

export default function PublicRoutes(props) {
    const {
        className,
        style,
    } = props;
    return (
        <Switch className={className} style={style} >
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
}
