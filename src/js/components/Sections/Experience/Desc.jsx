import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

const Desc = styled.span`
    color: ${GLOBALS.colours.ide.key};
    text-transform: lowercase;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-style: italic;
    }

    &:after {
        content: ': ';
    }
`;

export default Desc;
