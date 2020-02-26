import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';
import GLOBALS from '../../styles/globals';

import { changeOpened } from '../../actions';

const BurgerLink = styled.a`
    display: none;
    padding: 0 0 0 15px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: block;
    }
`;

const BurgerLine = styled.span`
    display: block;
    width: 36px;
    height: 4px;
    background-color: ${GLOBALS.colours.text.lighter};
    margin-bottom: 5px;
`;

const Burger = ({ opened, changeOpened, onOpen }) => {
    return (
        <BurgerLink onClick={(e) => {
            e.preventDefault();
            onOpen(!opened);
            changeOpened(!opened);
        }} href="#">
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </BurgerLink>
    );
};

Burger.propTypes = {
    opened: PropTypes.bool.isRequired,
    changeOpened: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired
};

export default containme({
    component: Burger,
    actions: { changeOpened },
    mapStateToProps: ({ opened }) => ({ opened })
});

