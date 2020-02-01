import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../../styles/globals';

const ScoreWrapper = styled.div`
    text-transform: uppercase;
    text-align: right;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        margin-top: -8px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
`;

const Span = styled.span`
    font-size: 30px;

    &:before {
        content: 'Score';
    }
`;

const P = styled.p`
    font-size: 90px;
    line-height: 50px;
    margin: 5px -7px 0 0;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 55px;
        line-height: 20px;
    }
`;

const formatScore = (score) => `${'0'.repeat(4 - score.length)}${score}`;

const Score = ({ score }) => (
    <ScoreWrapper>
        <Span />
        <P>{formatScore(score.toString())}</P>
    </ScoreWrapper>
);

Score.propTypes = {
    score: PropTypes.number.isRequired
};

export default Score;
