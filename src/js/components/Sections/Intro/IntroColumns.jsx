import React from 'react';
import styled from 'styled-components';

import Puzzle from '../../Puzzle/Puzzle';
import Tetris from '../../Tetris/Tetris';
import Scores from './Scores';
import GLOBALS from '../../../styles/globals';

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% + 50px);
    margin-left: -50px;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        width: calc(100% + 20px);
        margin: 40px 0 30px -20px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        width: 100%;
        margin: 0;
        display: block;
    }

    > * {
        flex: 1 1 100%;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            width: 100%;
        }

        &:nth-child(3) {
            min-width: 416px;

            @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
                min-width: 240px;
                max-width: 240px;
            }

            @media (max-width: ${GLOBALS.sizes.tablet}) {
                min-width: 250px;
                max-width: auto;
            }

            @media (max-width: ${GLOBALS.sizes.mobile}) {
                width: 100%;
                max-width: 100%;
                min-width: 100%;
                margin: 0;
                padding: 0;
            }
        }
    }
`;

const Intro = () => (
    <Columns>
        <Puzzle />
        <Tetris />
        <Scores />
    </Columns>
);

export default Intro;
