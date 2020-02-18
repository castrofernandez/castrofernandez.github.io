import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import { TypingParagraph } from '../../TypingText/TypingText.component';
import { darken } from 'polished';

const SidebarWrapper = styled.aside`
    flex: 1 0 auto;
    background-color: ${GLOBALS.colours.sections.projects.box};
    color: #fff;
    width: 35%;
    margin-right: 30px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
`;

const Title = styled(TypingParagraph)`
    color: ${GLOBALS.colours.secondary};
    font-size: 40px;
    text-align: center;
    padding: 15px 0;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Item = styled.li`
    padding: 12px 20px;
    cursor: pointer;

    &:hover {
        background-color: ${darken(0.05, GLOBALS.colours.sections.projects.box)};
    }

    &.active {
        background-color: ${GLOBALS.colours.secondary};
        color: ${GLOBALS.colours.text.default};
    }
`;

const Sidebar = ({ projects, index, onChange }) => (
    <SidebarWrapper>
        <Title text="--SELECT--" />
        <List>
            {
                projects.map(({ name }, i) => ((
                    <Item key={i} className={i === index ? 'active' : ''} onClick={() => onChange(i)}>
                        {name}
                    </Item>
                )))
            }
        </List>
    </SidebarWrapper>
);

Sidebar.propTypes = {
    projects: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Sidebar;
