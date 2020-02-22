import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { basicContent, line, trailComma } from './BasicContent';
import String from './String';
import Desc from './Desc';
import TranslatableTypingSpan from '../../Translatable/Translatable';

const PositionWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const Position = ({ position }) => (
    <PositionWrapper>
        <Desc>position</Desc>
        <String>
            <TranslatableTypingSpan text={position} />
        </String>
    </PositionWrapper>
);

Position.propTypes = {
    position: PropTypes.string.isRequired
};

export default Position;
