import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

const Input = styled.span`
    position: relative;

    &:before {
        content: '${props => props.text}';
        color: ${GLOBALS.colours.sections.studies.input};
        text-transform: uppercase;
    }
`;

const CommandResult = ({ children, length }) => {
    return (
        <React.Fragment>
            <div><Input text={`Total ${length}`} /></div>
            {children}
        </React.Fragment>
    );
};

CommandResult.propTypes = {
    children: PropTypes.node,
    length: PropTypes.number.isRequired
};

export default CommandResult;
