import React from 'react';
import PropTypes from 'prop-types';

export default function Verification(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            Verification code here!
        </div>
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
