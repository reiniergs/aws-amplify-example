import React from 'react';
import PropTypes from 'prop-types';

export default function SignIn(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            Sign In!
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
