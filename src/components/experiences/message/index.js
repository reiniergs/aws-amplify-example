import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import CloseIcon from './../../icons/close/index.js';
import ErrorIcon from './../../icons/error/index.js';
import './styles.css';

export default function Message(props) {
    const {
        className,
        style,
    } = props;

    function getClassName() {
        return classnames('aws-amplify-app-message_container', className);
    }

    return (
        <article className={getClassName()} style={style}>
            <div className="aws-amplify-app-message_content">
                <ErrorIcon className="aws-amplify-app-message_icon" />
                <p className="aws-amplify-app-message_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <ButtonIcon 
                    size="medium" 
                    icon={<CloseIcon />}
                    className="aws-amplify-app-message_close-button" />
            </div>
        </article>
    );
}

Message.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Message.defaultProps = {
    className: undefined,
    style: {},
};

