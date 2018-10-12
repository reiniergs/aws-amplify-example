import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            <p>Sign Up!</p>
            <Link to="/signin">Sign In</Link>
        </div>
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
