import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';

import GLOBALS from '../../../styles/globals';
import TranslatableTypingSpan from '../../Translatable/Translatable';
import { lighten } from 'polished';

import { TypingLi } from '../../TypingText/TypingText';
import TypingChain from '../../TypingText/TypingChain';

const ViewerWrapper = styled.aside`
    color: #fff;
    flex: 1 1 auto;

    img {
        display: block;
        width: 100%;
    }
`;

const Info = styled.div`
    background-color: ${GLOBALS.colours.sections.projects.box};
    padding: 15px 25px 20px 25px;
    margin-top: 20px;
    position: relative;
    min-height: 340px;

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        margin-bottom: 20px;
    }
`;

const Year = styled.h4`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    margin: 0;
    background-color: ${GLOBALS.colours.primary};
`;

const Label = styled.span`
    display: block;
    color: ${lighten(0.2, GLOBALS.colours.sections.projects.box)};
`;

const Title = styled.h3`
    margin: 0 0 15px 0;
    font-size: 28px;
    padding-right: 75px;
`;

const Desc = styled.h5`
    margin: 0 0 15px 0;
    font-size: 24px;
`;

const Skill = styled(TypingLi)`
    span:not(.to-type) {
        background-color: ${lighten(0.2, GLOBALS.colours.sections.projects.box)};
        color: ${GLOBALS.colours.text.default};
    }

    &:nth-child(3n + 1) {
        span:not(.to-type) {
            background-color: ${GLOBALS.colours.sections.projects.back};
            color: ${GLOBALS.colours.text.lightest};
        }
    }

    &:nth-child(3n + 3) {
        span:not(.to-type) {
            background-color: ${lighten(0.2, GLOBALS.colours.sections.projects.back)};
            color: ${GLOBALS.colours.text.default};
        }
    }
`;

const getProjectSlice = (device, projects, index) => device !== 'mobile' ? [projects[index]] : projects;

const Viewer = ({ projects, index, device }) => {
    return (
        <React.Fragment>
            {
                getProjectSlice(device, projects, index).map(({ image, name, year, tasks, skills }, i) => (
                    <ViewerWrapper key={i}>
                        <img alt={name} src={image} />
                        <Info>
                            <Year>{year}</Year>
                            <Label><TranslatableTypingSpan text="title" /></Label>
                            <Title>{name}</Title>
                            <Label><TranslatableTypingSpan text="tasks" /></Label>
                            <Desc><TranslatableTypingSpan text={tasks} /></Desc>
                            <TypingChain>
                                {
                                    skills.map((skill, i) => (
                                        <Skill key={i} text={skill} />
                                    ))
                                }
                            </TypingChain>
                        </Info>
                    </ViewerWrapper>
                ))
            }
        </React.Fragment>
    );
};

Viewer.propTypes = {
    projects: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    device: PropTypes.string.isRequired
};

export default containme({
    component: Viewer,
    mapStateToProps: ({ device }) => ({ device })
});