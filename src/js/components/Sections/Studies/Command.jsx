/* eslint-disable no-new */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Typer from './Typer';

const Prompt = styled.span`
    &:before {
        content: 'juancastro>';
        color: ${GLOBALS.colours.sections.studies.prompt};
        margin-right: 20px;
    }
`;

const CommandWrapper = styled.div`
    margin-bottom: 10px;
`;

const Input = styled.span`
    position: relative;

    &:before {
        content: '${props => props.text}';
        color: ${GLOBALS.colours.sections.studies.input};
    }

    &:after {
        background-color: ${GLOBALS.colours.sections.studies.input};
        position: ${props => props.finished ? 'relative' : 'absolute'};
        content: '';
        width: 15px;
        height: 100%;
        right: -20px;
    }
`;

const SPEED = 2;

const Command = ({ showPrompt, text, onFinish = () => {} }) => {
    const [typed, setTyped] = useState('');
    const [finished, setFinished] = useState(false);

    const handler = ({ text, finished }) => {
        setTyped(text);
        setFinished(finished);
        return finished ? onFinish() : false;
    };

    useEffect(() => {
        new Typer({
            text,
            speed: SPEED,
            handler
        });
    }, [text]);

    return (
        <CommandWrapper>
            { showPrompt ? <Prompt /> : <React.Fragment /> }
            <Input text={typed} finished={finished} />
        </CommandWrapper>
    );
};

Command.propTypes = {
    showPrompt: PropTypes.bool,
    text: PropTypes.string,
    onFinish: PropTypes.func
};

export default Command;
