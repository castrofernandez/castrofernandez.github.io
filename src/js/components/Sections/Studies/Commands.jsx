/* eslint-disable no-new */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Command from './Command';

const CommandWrapper = styled.div``;

const Commands = ({ commands = [], onFinished = () => {} }) => {
    const [index, setIndex] = useState(0);

    const onFinish = () => setIndex(index + 1);

    useEffect(() => index >= commands.length ? onFinished() : undefined, [index]);

    return (
        <CommandWrapper>
            {
                commands.slice(0, index + 1).map((command, i) => (
                    <Command key={i} showPrompt text={command} onFinish={onFinish} />
                ))
            }
        </CommandWrapper>
    );
};

Commands.propTypes = {
    commands: PropTypes.array.isRequired,
    onFinished: PropTypes.func
};

export default Commands;
