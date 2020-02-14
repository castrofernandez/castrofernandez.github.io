import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { line, trailComma } from './BasicContent';
import String from './String';
import Desc from './Desc';

import Translations from '../../../containers/Translations';
import languageContainer from '../../../containers/Language.container';

import lineSplitter from './LineSplitter';

const DescriptionWrapper = styled.h4`
    margin: 0;
`;

const Line = styled.div`
    ${line};

    &:first-child {
        display: inline-block;
    }

    &:last-child {
        display: inline-block;
        ${trailComma};
    }

    &:not(:first-child) {
        padding-left: 160px;
    }
`;

const MAX_LENGTH = 35;

const translate = (language, key) => Translations.getTranslationHTML(language, key);

const Description = ({ description, language }) => (
    <DescriptionWrapper>
        {
            lineSplitter(translate(language, description), MAX_LENGTH)
                .map((line, i) => (
                    <Line key={i}>
                        { i === 0 ? <Desc>description</Desc> : <React.Fragment /> }
                        <String>{line}</String>
                    </Line>
                ))
        }
    </DescriptionWrapper>
);

Description.propTypes = {
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
};

export default languageContainer(Description);
