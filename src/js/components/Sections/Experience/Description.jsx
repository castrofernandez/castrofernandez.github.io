import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { basicContent, line, trailComma } from './BasicContent';
import String from './String';
import Desc from './Desc';
import TranslatableTypingSpan from '../../Translatable/Translatable.container';

const DescriptionWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const Description = ({ description }) => (
    <DescriptionWrapper>
        <Desc>description</Desc>
        <String>
            <TranslatableTypingSpan text={description} />
        </String>
    </DescriptionWrapper>
);

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;
