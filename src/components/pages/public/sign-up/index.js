import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';
import FacebookIcon from './icons/facebookIcon';
import GoogleIcon from './icons/googleIcon';
import TwitterIcon from './icons/twitterIcon';
import EmailIcon from './icons/emailIcon';
import LockIcon from './icons/lockIcon';
import UserIcon from './icons/userIcon';
import './styles.css';
import './media-queries.css';

export default function SignUp(props) {
    const {
        className,
        style,
    } = props;

    const options = [
        { value: 'selected', label: 'I agree the Terms and Conditions and the Privacy Policy', disabled: false },
    ];

    function getClassName() {
        return classnames('aws-amplify-app-signup_container', className);
    }

    return (
        <section className={getClassName()} style={style}>
            <Link to="/home">
                <img src="assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-signup_image" />
            </Link>    
            <p className="aws-amplify-app-signup_header">Sign up</p>
            <Card className="aws-amplify-app-signup_card">
                <article className="aws-amplify-app-signup_social-buttons-container">
                    <Button className="aws-amplify-app-signup_facebook-button">
                        <FacebookIcon className="aws-amplify-app-signup_social-icon" />
                        Sign up with Facebook
                    </Button>
                    <Button variant="neutral">
                        <GoogleIcon className="aws-amplify-app-signup_social-icon" />
                        Sign up with Google
                    </Button>
                    <Button className="aws-amplify-app-signup_twitter-button">
                        <TwitterIcon className="aws-amplify-app-signup_social-icon" />
                        Sign up with Twitter
                    </Button>
                </article>
                <article className="aws-amplify-app-signup_inputs-container">
                    <Input
                        label="Name"
                        required
                        placeholder="Enter your name"
                        icon={<UserIcon />} />
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
                    <Button variant="brand" label="Create Account" />
                    <CheckboxGroup
                        required
                        options={options}
                        className="aws-amplify-app-signup_checkbox" />
                    
                </article>
            </Card>

            <Link className="aws-amplify-app-signup_link"  to="/signin">Sign in?</Link>
        </section>
    );
}

SignUp.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SignUp.defaultProps = {
    className: undefined,
    style: {},
};
