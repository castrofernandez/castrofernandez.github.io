import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../../styles/Message.style';
import containme from 'containme';

const formatScore = level => `${'0'.repeat(2 - level.length)}${level}`;

const Level = ({ level }) => (
    <Message>
        <span>{formatScore(level.toString())}</span>
    </Message>
);

Level.propTypes = {
    level: PropTypes.number.isRequired
};

export default containme({
    component: Level,
    mapStateToProps: ({ level }) => ({ level })
});
