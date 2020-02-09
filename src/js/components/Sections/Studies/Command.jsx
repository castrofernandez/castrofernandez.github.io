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

const Input = styled.span`
    position: relative;

    &:before {
        content: '${props => props.text}';
        color: ${GLOBALS.colours.sections.studies.input};
    }

    &:after {
        background-color: ${GLOBALS.colours.sections.studies.input};
        position: absolute;
        content: '';
        width: 15px;
        height: 100%;
        right: -20px;
    }
`;

const SPEED = 50;

const Command = ({ text }) => {
    const [typed, setTyped] = useState('');

    useEffect(() => {
        new Typer({
            text,
            speed: SPEED,
            handler: ({ text }) => setTyped(text)
        });
    }, [text]);

    return (
        <React.Fragment>
            <Prompt />
            <Input text={typed} />
        </React.Fragment>
    );
};

Command.propTypes = {
    text: PropTypes.string.isRequired
};

export default Command;
