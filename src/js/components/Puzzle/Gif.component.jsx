import React from 'react';
import PropTypes from 'prop-types';

import JuanCastro from '../../../images/juan-castro.gif';

const Gif = ({ show }) => (
    <img
        alt="Juan Castro"
        className="gif"
        id="gif"
        src={JuanCastro}
        style={show ? { display: 'block' } : { display: 'none' }}
    />
);

Gif.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Gif;
