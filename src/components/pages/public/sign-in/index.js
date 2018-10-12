import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import FacebookIcon from './icons/facebookIcon';
import GoogleIcon from './icons/googleIcon';
import TwitterIcon from './icons/twitterIcon';
import EmailIcon from './icons/emailIcon';
import LockIcon from './icons/lockIcon';
import './styles.css';
import './media-queries.css';

export default function SignIn(props) {
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
                <img src="assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-signin_image" />
            </Link>    
            <p className="aws-amplify-app-signin_header">Sign in</p>
            <Card className="aws-amplify-app-signin_card">
                <article className="aws-amplify-app-signin_social-buttons-container">
                    <Button className="aws-amplify-app-signin_facebook-button">
                        <FacebookIcon className="aws-amplify-app-signin_social-icon" />
                        Login with Facebook
                    </Button>
                    <Button variant="neutral">
                        <GoogleIcon className="aws-amplify-app-signin_social-icon" />
                        Login with Google
                    </Button>
                    <Button className="aws-amplify-app-signin_twitter-button">
                        <TwitterIcon className="aws-amplify-app-signin_social-icon" />
                        Login with Twitter
                    </Button>
                </article>
                <article className="aws-amplify-app-signin_inputs-container">
                    <Input
                        label="Email Address"
                        required
                        placeholder="Enter your email address"
                        icon={<EmailIcon />} />
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
            <Link className="aws-amplify-app-signin_link" to="/signup">Sign up?</Link>
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
