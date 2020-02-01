import styled from 'styled-components';
import GLOBALS from '../../styles/globals';

export const PuzzleWrapper = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    user-select: none;
`;

export const Picture = styled.picture`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: block;
        width: 100%;
    }
`;
