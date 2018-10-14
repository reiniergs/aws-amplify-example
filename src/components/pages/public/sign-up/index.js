import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';
import SocialLogin from './../../../experiences/social-login';
import EmailIcon from './icons/emailIcon';
import LockIcon from './icons/lockIcon';
import UserIcon from './icons/userIcon';
import './styles.css';
import './media-queries.css';
import signup from './../../../../redux/actions/signup';
import history from './../../../../history';

function SignUp(props) {
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

    function signup() {
        history.push('/home/verification');
        // props.signup({
        //     name: 'Reinier Guerra',
        //     username:  'reiniergs',
        //     email: 'reiniergs@gmail.com',
        //     password: '',
        //
        // });
    }

    return (
        <section className={getClassName()} style={style}>
            <Link to="/home">
                <img src="/assets/rainbow-logo.svg" alt="rainbow logo" className="aws-amplify-app-signup_image" />
            </Link>    
            <p className="aws-amplify-app-signup_header">Sign up</p>
            <Card className="aws-amplify-app-signup_card">
                <SocialLogin />
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
                    <Button variant="brand" label="Create Account" onClick={signup}/>
                    <CheckboxGroup
                        required
                        options={options}
                        className="aws-amplify-app-signup_checkbox" />
                    
                </article>
            </Card>

            <Link className="aws-amplify-app-signup_link"  to="/home/signin">Sign in?</Link>
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

function stateToProps(state) {
    return {

    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        signup,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SignUp);

