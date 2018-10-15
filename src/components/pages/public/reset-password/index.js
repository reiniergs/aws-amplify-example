import React from 'react';
import PropTypes from 'prop-types';

export default function ResetPassword(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            Reset password!
        </div>
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
