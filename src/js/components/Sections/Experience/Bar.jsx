import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';

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

    &.section-experience {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: 12px;

        &.section-experience {
            position: relative;
        }
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

const Bar = ({ section }) => <BarWrapper className={`section-${section}`} />;

Bar.propTypes = {
    section: PropTypes.string.isRequired
};

export default containme({
    component: Bar,
    mapStateToProps: ({ section }) => ({ section })
});
