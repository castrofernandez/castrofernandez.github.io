import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import GLOBALS from '../styles/globals';

const Links = styled.ul`
    margin: ${props => props.fitted ? '30px 0 0 0' : '0 0 40px 0'};
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-bottom: 20px;
    }

    li {
        width: calc(50% - 15px);
        flex: 0 0 auto;
        margin-bottom: ${props => props.fitted ? '10px' : '30px'};

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            width: 100%;
        }
    }
`;

const Link = styled.a`
    display: inline-block;
    width: 100%;
    color: ${GLOBALS.colours.white};
    text-decoration: none;
    text-align: ${props => props.fitted ? 'center' : 'left'};
    padding: ${props => props.fitted ? '6px 0' : '12px 25px'};
    font-size: 30px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        font-size: ${props => props.fitted ? '20px' : '25px'};
    }

    &.mail {
        background-color: ${GLOBALS.colours.primary};

        &:hover {
            background-color: ${darken(0.06, GLOBALS.colours.primary)};
        }
    }

    &.twitter {
        background-color: ${GLOBALS.colours.sections.footer.twitter};

        &:hover {
            background-color: ${darken(0.15, GLOBALS.colours.sections.footer.twitter)};
        }
    }

    &.linkedin {
        background-color: ${GLOBALS.colours.sections.footer.linkedin};
        color: ${GLOBALS.colours.text.default};

        &:hover {
            background-color: ${darken(0.04, GLOBALS.colours.sections.footer.linkedin)};
        }

        span {
            color: ${GLOBALS.colours.white};
        }
    }

    &.github {
        background-color: ${GLOBALS.colours.sections.footer.github};

        &:hover {
            background-color: ${lighten(0.1, GLOBALS.colours.sections.footer.github)};
        }
    }
`;

const Social = ({ fitted }) => (
    <Links fitted={fitted}>
        <li>
            <Link fitted={fitted} className="link mail" href="mailto:info@juancastro.es">info@juancastro.es</Link>
        </li>
        <li>
            <Link fitted={fitted} className="link twitter" rel="me nofollow" href="https://twitter.com/castrofernandez">Twitter</Link>
        </li>
        <li>
            <Link fitted={fitted} className="link linkedin" rel="me nofollow" href="https://es.linkedin.com/pub/juan-castro-fernández/35/43b/728">Linked<span>In</span></Link>
        </li>
        <li>
            <Link fitted={fitted} className="link github" rel="me nofollow" href="https://github.com/castrofernandez/">GitHub</Link>
        </li>
    </Links>
);

Social.propTypes = {
    fitted: PropTypes.bool
};

export default Social;
