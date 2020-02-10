/* eslint-disable no-new */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

import TranslatableTypingSpan from '../../Translatable/Translatable.container';
import TypingChain from '../../TypingText/TypingChain.component';
import { TypingLi } from '../../TypingText/TypingText.component';
import { TranslatableTypingLi } from '../../TypingText/TranslatableTypingText.component';

const LanguageList = styled.ul`
    list-style: none;
    padding: 0;

    > li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        min-height: 40px;
    }
`;

const Language = styled.div`
    text-transform: uppercase;
    color: ${GLOBALS.colours.text.default};
    position: relative;
    padding-left: 27px;
    margin-right: 20px;

    &:before {
        position: absolute;
        left: 0;
        content: '>>';
        opacity: 0.6;
    }
`;

const Languages = () => (
    <LanguageList>
        <li>
            <Language><TranslatableTypingSpan text="spanish" /></Language>
            <TranslatableTypingSpan text="native" />
        </li>
        <li>
            <Language><TranslatableTypingSpan text="asturian" /></Language>
            <TranslatableTypingSpan text="native" />
        </li>
        <li>
            <Language><TranslatableTypingSpan text="english" /></Language>
            <TypingChain>
                <TypingLi text="B2" />
                <TranslatableTypingLi text="eoi" link="http://eoigijon.com/" />
                <TypingLi text="2003" />
            </TypingChain>
        </li>
        <li>
            <Language><TranslatableTypingSpan text="french" /></Language>
            <TypingChain>
                <TypingLi text="A1" />
                <TranslatableTypingLi text="universityOviedo" link="http://www.uniovi.es/" />
                <TypingLi text="2008" />
            </TypingChain>
        </li>
        <li>
            <Language><TranslatableTypingSpan text="german" /></Language>
            <TypingChain>
                <TypingLi text="A1" />
                <TranslatableTypingLi text="universityOviedo" link="http://www.uniovi.es/" />
                <TypingLi text="2008" />
            </TypingChain>
        </li>
        <li>
            <Language><TranslatableTypingSpan text="italian" /></Language>
            <TranslatableTypingSpan text="basicKnowledge" />
        </li>
    </LanguageList>
);

Languages.propTypes = {

};

export default Languages;
