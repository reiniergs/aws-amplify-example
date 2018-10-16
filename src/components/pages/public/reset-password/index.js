import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import BackIcon from './../../../icons/back/index.js';
import LockIcon from './../../../icons/lock/index.js';
import KeysIcon from './../../../icons/keys/index.js';
import './styles.css';
import './media-queries.css';

export default function ResetPassword(props) {
    const {
        className,
        style,
    } = props;

    function getClassName() {
        return classnames('aws-amplify-app-reset-password_container', className);
    }

    return (
        <section className={getClassName()} style={style}>
            <Link className="aws-amplify-app-reset-password_back-link" to="/home/signup">
                <BackIcon className="aws-amplify-app-reset-password_back-icon"/>
                Back
            </Link>
            <Link to="/home">
                <img src="/assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-reset-password_image" />
            </Link>
            <p className="aws-amplify-app-reset-password_header">Reset Password</p>
            <Card className="aws-amplify-app-reset-password_card">
                <article className="aws-amplify-app-reset-password_content">
                    <p className="aws-amplify-app-reset-password_message">
                        We have sent you an code to your Email
                        <strong> leandro@gmail.com </strong>
                    </p>
                    <Input
                        label="Enter the CODE we sent to"
                        required
                        placeholder="Enter the verification code"
                        icon={<KeysIcon />} />
                    <Input
                        label="Password"
                        required
                        placeholder="Enter the new password"
                        icon={<LockIcon />} />
                    <Button
                        variant="brand"
                        label="Login"
                    />
                </article>
            </Card>
            <Link className="aws-amplify-app-reset-password_link" to="/home/signin">Sign in?</Link>
        </section>
    );
}

ResetPassword.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ResetPassword.defaultProps = {
    className: undefined,
    style: {},
};
