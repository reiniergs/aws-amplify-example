import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import UserIcon from './icons/userIcon';
import KeysIcon from './icons/keysIcon';
import BackIcon from './icons/backIcon';
import './styles.css';
import './media-queries.css';

export default function Verification(props) {
    const {
        className,
        style,
    } = props;

    function getClassName() {
        return classnames('aws-amplify-app-verify-account_container', className);
    }

    return (
        <section className={getClassName()} style={style}>
            <Link className="aws-amplify-app-verify-account_back-link" to="/home/signup">
                <BackIcon className="aws-amplify-app-verify-account_back-icon" />
                Back
            </Link>
            <Link to="/home">
                <img src="/assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-verify-account_image" />
            </Link>    
            <p className="aws-amplify-app-verify-account_header">Verify your account</p>
            <Card className="aws-amplify-app-verify-account_card">
                <article className="aws-amplify-app-verify-account_content">
                    <p className="aws-amplify-app-verify-account_message">
                        We have sent you an code to your Email
                        <strong> email@gmail.com </strong>
                    </p>
                    <Input
                        label="Username"
                        required
                        icon={<UserIcon />} />
                    <Input
                        label="Enter the CODE we sent to"
                        placeholder="Enter the verification code"
                        type="number"
                        required
                        icon={<KeysIcon />} />
                    <Button variant="brand" label="Login" />
                    <p className="aws-amplify-app-verify-account_no-code">
                        No code?
                    </p>
                    <Button variant="outline-brand" label="Resend" className="aws-amplify-app-verify-account_resend" />
                </article>
            </Card>
            <Link className="aws-amplify-app-verify-account_link" to="/home/signin">Sign in?</Link>
        </section>
    );
}

Verification.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Verification.defaultProps = {
    className: undefined,
    style: {},
};
