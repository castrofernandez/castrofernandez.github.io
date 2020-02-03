import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

const String = styled.span`
    color: ${GLOBALS.colours.secondary};

    &:before {
        content: '"';
    }

    &:after {
        content: '"';
    }
`;

export default String;
