import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Commands from './Commands';
import CommandResult from './CommandResult';

const CommandWrapper = styled.div`
`;

const Shell = ({ children, commands, length }) => {
    return (
        <CommandWrapper>
            <Commands commands={commands} />
            <CommandResult length={length}>{children}</CommandResult>
        </CommandWrapper>
    );
};

Shell.propTypes = {
    children: PropTypes.node,
    commands: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
};

export default Shell;
