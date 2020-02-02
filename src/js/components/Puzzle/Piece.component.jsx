import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
    flex: 0 0 auto;
    width: 25%;
    height: 25%;
`;

const getImage = (id) => require(`../../../images/puzzle/${id.toString()}.png`);

const Piece = ({ id, order }) => {
    return (
        <Img src={getImage(id)} style={{ order }} />
    );
};

Piece.propTypes = {
    id: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired
};

export default Piece;
