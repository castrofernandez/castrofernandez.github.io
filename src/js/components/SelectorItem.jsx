import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GLOBALS from '../styles/globals';

const A = styled.a`
    display: block;
    font-size: 24px;
    line-height: 70px;
    padding: 0 20px;
    background-color: ${GLOBALS.colours.secondary};
    color: ${GLOBALS.colours.text.default};
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    min-width: 12vw;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 18px;
        line-height: 40px;
        padding: 0 10px;
    }

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        line-height: 50px;
    }

    &.squared {
        min-width: 62px;
    }

    &:hover {
        background-color: darken(${GLOBALS.colours.secondary}, 25%);
        color: #fff;
    }
`;

const Item = ({ className = '', href, title = '', onClick = () => {}, children }) => {
    return (
        <A className={className} href={href} title={title} onClick={onClick}>{children}</A>
    );
};

Item.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Item;
