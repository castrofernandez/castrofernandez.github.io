import React from 'react';
import styled from 'styled-components';

import { basicContent, line, trailComma } from '../../../styles/basic.content.css';
import Number from './Number';
import Desc from './Desc';

const WhenWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const When = () => (
    <WhenWrapper>
        <Desc>from</Desc>
        <Number>2017</Number>
    </WhenWrapper>
);

export default When;
