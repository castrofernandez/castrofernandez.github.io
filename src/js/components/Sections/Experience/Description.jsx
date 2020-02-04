import React from 'react';
import styled from 'styled-components';

import { basicContent, line, trailComma } from './BasicContent';
import String from './String';
import Desc from './Desc';

const DescriptionWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const Position = () => (
    <DescriptionWrapper>
        <Desc>description</Desc>
        <String
            data-es="Desarrollo web y mantenimiento de producto"
            data-ast="Desenvuelvo web y caltenimientu de productu"
        >
            Web development and application maintenance
        </String>
    </DescriptionWrapper>
);

export default Position;
