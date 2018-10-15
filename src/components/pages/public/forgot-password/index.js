import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ForgotPassword(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            Forgot password!!
            <Link to="/home/reset-password">Reset</Link>
        </div>
    );
}

ForgotPassword.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ForgotPassword.defaultProps = {
    className: undefined,
    style: {},
};
