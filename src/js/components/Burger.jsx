import React from 'react';
import styled from 'styled-components';
import GLOBALS from '../styles/globals';

const BurgerLink = styled.a`
    display: none;
    padding: 15px 0 0 15px;
`;

const BurgerLine = styled.span`
    display: block;
    width: 36px;
    height: 4px;
    background-color: ${GLOBALS.colours.text.lighter};
    margin-bottom: 5px;
`;

const Burger = () => {
    return (
        <BurgerLink href="#">
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </BurgerLink>
    );
};

export default Burger;
