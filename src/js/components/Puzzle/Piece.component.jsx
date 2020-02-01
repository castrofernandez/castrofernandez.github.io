import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
    flex: 0 0 auto;
    width: 25%;
    height: 25%;
    transition: all .05s ease-out;

    &.positioned {
        position: absolute;
    }
`;

const getImage = id => require(`../../../images/puzzle/${id}.png`);

const Piece = ({ id, width, coordinates }) => {
    const [left, top] = coordinates;
    return (
        <Img
            alt=""
            className="positioned"
            src={getImage(id)}
            style={{
                width: `${width}px`,
                height: `${width}px`,
                top: `${top}px`,
                left: `${left}px`
            }}
        />
    );
};

Piece.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    coordinates: PropTypes.array.isRequired
};

export default Piece;
