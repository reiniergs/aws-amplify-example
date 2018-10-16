import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import UserIcon from './../../../icons/user/index.js';
import BackIcon from './../../../icons/back/index.js';
import './styles.css';
import './media-queries.css';

export default function ForgotPassword(props) {
    const {
        className,
        style,
    } = props;

    function getClassName() {
        return classnames('aws-amplify-app-forgot-password_container', className);
    }

    return (
        <section className={getClassName()} style={style}>
            <Link className="aws-amplify-app-forgot-password_back-link" to="/home/signup">
                <BackIcon className="aws-amplify-app-forgot-password_back-icon"/>
                Back
            </Link>
            <Link to="/home">
                <img src="/assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-forgot-password_image" />
            </Link>
            <p className="aws-amplify-app-forgot-password_header">Reset Password</p>
            <Card className="aws-amplify-app-forgot-password_card">
                <article className="aws-amplify-app-forgot-password_content">
                    <p className="aws-amplify-app-forgot-password_message">
                        A security code will be sent to your email address.
                    </p>
                    <Input
                        label="Username"
                        required
                        placeholder="Enter your username"
                        icon={<UserIcon />} />
                    <Button
                        variant="brand"
                        label="Login"
                    />
                </article>
            </Card>
            <Link className="aws-amplify-app-forgot-password_link" to="/home/signin">Sign in?</Link>
            <Link to="/home/reset-password">Reset</Link>
        </section>
    )
}

ForgotPassword.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ForgotPassword.defaultProps = {
    className: undefined,
    style: {},
};
