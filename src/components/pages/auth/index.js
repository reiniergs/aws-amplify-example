import React from 'react';
import PropTypes from 'prop-types';

export default function AuthApp(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div className={className} style={style} >
            Auth App!!
        </div>
    );
}

AuthApp.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

AuthApp.defaultProps = {
    className: undefined,
    style: {},
};
