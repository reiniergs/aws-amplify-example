import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-rainbow-components/components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logout from './../../../redux/actions/logout';

class AuthApp extends Component {
    render() {
        const { props } = this;
        const {
            className,
            style,
        } = props;
        return (
            <div className={className} style={style} >
                Welcome {props.user.name}!
                <Button label="Logout" onClick={props.logout} />
            </div>
        );
    }
}

AuthApp.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

AuthApp.defaultProps = {
    className: undefined,
    style: {},
};

function stateToProps(state) {
    return {
        user: state.app.currentUser,
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        logout,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(AuthApp);
