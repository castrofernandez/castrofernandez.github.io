import React from 'react';
import PropTypes from 'prop-types';

const getImage = id => require(`../../../images/puzzle/${id}.png`);

const Piece = ({ id, width, coordinates }) => {
    const [left, top] = coordinates;
    return (
        <img
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
