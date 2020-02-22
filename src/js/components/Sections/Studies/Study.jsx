import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

import TranslatableTypingSpan from '../../Translatable/Translatable';

const Title = styled.h3`
    font-weight: normal;
    text-transform: uppercase;
    color: ${GLOBALS.colours.text.default};
`;

const Subjects = styled.ul`
    list-style: none;
    text-transform: uppercase;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
        flex: 0 0 auto;
        width: 50%;
        position: relative;
        padding-left: 27px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            width: 100%;
        }

        &:before {
            position: absolute;
            left: 0;
            content: '>>';
            opacity: 0.6;
        }
    }
`;

const StudyWrapper = styled.article`

`;

const Where = styled.section`
    ul {
        justify-content: flex-end;
        margin-bottom: 15px;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            .typing {
                font-size: 20px;
                line-height: 28px;
            }
        }
    }
`;

const Study = ({ title, subjects, locations }) => (
    <StudyWrapper>
        <Title><TranslatableTypingSpan text={title} /></Title>
        <Subjects>
            {
                subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))
            }
        </Subjects>
        <Where>
            {locations}
        </Where>
    </StudyWrapper>
);

Study.propTypes = {
    title: PropTypes.string.isRequired,
    subjects: PropTypes.array.isRequired,
    locations: PropTypes.node.isRequired
};

export default Study;
