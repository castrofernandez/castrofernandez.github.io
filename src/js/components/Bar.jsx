import styled from 'styled-components';

import GLOBALS from '../styles/globals';

const Bar = styled.hr`
    display: inline-block;
    width: 0;
    height: 22px;
    border: none;
    margin: 0;
    background-color: ${GLOBALS.colours.text.lighter};
    animation: grow 1s;
    animation-fill-mode: forwards;
`;

export default Bar;
