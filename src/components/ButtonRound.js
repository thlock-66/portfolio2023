import React from 'react';
import PropTypes from 'prop-types';
import './ButtonRound.css';

const ButtonRound = ({ icon, link }) => {
    const openLinkInNewTab = () => {
        window.open(link, '_blank');
    };

    return (
        <button className="round-button" onClick={openLinkInNewTab}>
            {icon}
        </button>
    );
};

ButtonRound.propTypes = {
    icon: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
};

export default ButtonRound;
