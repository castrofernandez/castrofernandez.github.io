import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import JuanCastro from '../../../images/juan-castro.gif';

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: none;
`;

const Gif = ({ show }) => (
    <Img
        alt="Juan Castro"
        id="gif"
        src={JuanCastro}
        style={show ? { display: 'block' } : { display: 'none' }}
    />
);

Gif.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Gif;
