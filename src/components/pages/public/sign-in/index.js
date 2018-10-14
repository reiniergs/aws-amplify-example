import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import UserIcon from './icons/userIcon';
import LockIcon from './icons/lockIcon';
import SocialLogin from './../../../experiences/social-login';
import './styles.css';
import './media-queries.css';

function SignIn(props) {
    const {
        className,
        style,
    } = props;

    function getClassName() {
        return classnames('aws-amplify-app-signin_container', className);
    }

    return (
        <section className={getClassName()} style={style}>
            <Link to="/home">
                <img src="/assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-signin_image" />
            </Link>    
            <p className="aws-amplify-app-signin_header">Sign in</p>
            <Card className="aws-amplify-app-signin_card">
                <SocialLogin />
                <article className="aws-amplify-app-signin_inputs-container">
                    <Input
                        label="Username"
                        required
                        placeholder="Enter your username"
                        icon={<UserIcon />} />
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        icon={<LockIcon />} />
                    <Button variant="brand" label="Login" />
                    <a href="/" className="aws-amplify-app-signin_link">
                        Forgot your password?
                    </a>
                </article>
            </Card>
            <Link className="aws-amplify-app-signin_link" to="/home/signup">Sign up?</Link>
        </section>
    );
}

SignIn.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SignIn.defaultProps = {
    className: undefined,
    style: {},
};

function stateToProps(state) {
    return {

    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SignIn);
