import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';

const BarWrapper = styled.span`
    display: block;
    height: 50px;
    background-color: ${GLOBALS.colours.text.lighter};
    color: rgba(#fff, 0.6);
    font-size: 20px;
    line-height: 20px;
    padding: 14px 26px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 30;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: 12px;
    }

    > * {
      flex: 0 0 auto;
    }

    &:before {
      content: 'juancastro/source/experience.ex'
    }

    &:after {
      content: '1:20';
      letter-spacing: 2px;
    }
`;

const Bar = () => <BarWrapper />;

export default Bar;
