import React from 'react';
import styled from 'styled-components';

import { basicContent, line, trailComma } from './BasicContent';
import String from './String';
import Desc from './Desc';

const PositionWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const Position = () => (
    <PositionWrapper>
        <Desc>position</Desc>
        <String
            data-es="Desarrollador Full Stack"
            data-ast="Desenvolvedor Full Stack"
        >
            Full Stack Developer
        </String>
    </PositionWrapper>
);

export default Position;
