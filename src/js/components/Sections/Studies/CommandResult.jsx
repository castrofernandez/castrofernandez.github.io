import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

const Result = styled.div`
    opacity: 0;

    &.finished {
        opacity: 1;
    }
`;

const Input = styled.span`
    position: relative;

    &:before {
        content: '${props => props.text}';
        color: ${GLOBALS.colours.sections.studies.input};
        text-transform: uppercase;
    }
`;

const CommandResult = ({ children, length, finished }) => {
    return (
        <Result className={finished ? 'finished' : ''}>
            <div><Input text={`Total ${length}`} /></div>
            {children}
        </Result>
    );
};

CommandResult.propTypes = {
    children: PropTypes.node,
    length: PropTypes.number.isRequired,
    finished: PropTypes.bool
};

export default CommandResult;
