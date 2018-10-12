import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            <p>Sign In!</p>
            <Link to="/signup">Sign Up</Link>
        </div>
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
