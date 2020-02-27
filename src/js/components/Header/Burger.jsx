import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';
import GLOBALS from '../../styles/globals';
import scrolltome from 'scrolltome';

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

const Burger = ({ opened, changeOpened, onBurgerClick }) => {
    return (
        <BurgerLink onClick={(e) => {
            e.preventDefault();
            onBurgerClick(!opened);
            scrolltome.stop();
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
    onBurgerClick: PropTypes.func.isRequired
};

export default containme({
    component: Burger,
    actions: { changeOpened },
    mapStateToProps: ({ opened }) => ({ opened })
});

