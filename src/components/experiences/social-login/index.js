import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-rainbow-components/components/Button';
import FacebookIcon from './icons/facebookIcon';
import GoogleIcon from './icons/googleIcon';
import TwitterIcon from './icons/twitterIcon';
import { withFederated } from 'aws-amplify-react';
import { authenticate } from './../../../redux/actions/authenticate';

function SocialLoginUI(props) {
    const {
        googleSignIn,
        facebookSignIn,
        amazonSignIn,
    } = props;
    return (
        <article className="aws-amplify-app-signin_social-buttons-container">
            <Button className="aws-amplify-app-signin_facebook-button" onClick={facebookSignIn}>
                <FacebookIcon className="aws-amplify-app-signin_social-icon" />
                Login with Facebook
            </Button>
            <Button variant="neutral" onClick={googleSignIn}>
                <GoogleIcon className="aws-amplify-app-signin_social-icon" />
                Login with Google
            </Button>
            <Button className="aws-amplify-app-signin_twitter-button" onClick={amazonSignIn}>
                <TwitterIcon className="aws-amplify-app-signin_social-icon" />
                Login with Twitter
            </Button>
        </article>
    );
}

const Federated = withFederated(SocialLoginUI);

const federatedIds = {
    google_client_id: '324986215207-askmdchlagvi9r92anspcas9sp15l9ct.apps.googleusercontent.com',
    facebook_app_id: '947511325433571',
    amazon_client_id: ''
};

function SocialLogin(props) {
    function handleStateChange(event, user) {
        props.authenticate(user);
    }
    return <Federated federated={federatedIds} onStateChange={handleStateChange} />;
}

function stateToProps(state) {
    return {};
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        authenticate,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SocialLogin);
