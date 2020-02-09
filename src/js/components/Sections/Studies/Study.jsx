import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

import TranslatableTypingSpan from '../../Translatable/Translatable.container';

const Title = styled.h3`
    font-weight: normal;
    text-transform: uppercase;
    color: ${GLOBALS.colours.text.default};
`;

const Subjects = styled.ul`
    list-style: none;
    text-transform: uppercase;
    padding: 0;
`;

const Study = ({ title, subjects }) => (
    <React.Fragment>
        <Title><TranslatableTypingSpan text={title} /></Title>
        <Subjects>
            {
                subjects.map((subject) => (
                    <li>{subject}</li>
                ))
            }
        </Subjects>
    </React.Fragment>
);

Study.propTypes = {
    title: PropTypes.string.isRequired,
    subjects: PropTypes.array.isRequired
};

export default Study;
