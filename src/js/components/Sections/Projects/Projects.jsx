import React, { useState } from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Section from '../Section/Section.container';
import { TranslatableTypingParagraph } from '../../TypingText/TranslatableTypingText.component';

import Sidebar from './Sidebar';
import Viewer from './Viewer';

const ProjectWrapper = styled.div`
    background-color: ${GLOBALS.colours.sections.projects.back};
`;

const Title = styled(TranslatableTypingParagraph)`
    color: ${GLOBALS.colours.sections.projects.fore};
`;

const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

import WWWF from '../../../../images/projects/wwwf.png';
import A4AI from '../../../../images/projects/a4ai.png';
import WEIN from '../../../../images/projects/webindex.png';
import CIRC from '../../../../images/projects/circo1.png';
import WESC from '../../../../images/projects/wesCountry.png';
import LAND from '../../../../images/projects/landportal.png';
import WEBF from '../../../../images/projects/webfoundation.png';

const projects = [
    {
        image: WWWF,
        name: 'Web Foundation',
        year: 2015,
        tasks: 'wwwfTasks',
        skills: ['HTML5', 'CSS3', 'jQuery', 'PHP', 'MySQL', 'WordPress']
    },
    {
        image: A4AI,
        name: 'The Affordability Report',
        year: 2015,
        tasks: 'a4aiTasks',
        skills: ['HTML5', 'CSS3', 'jQuery', 'PHP', 'MySQL', 'WordPress']
    },
    {
        image: WEIN,
        name: 'The Web Index',
        year: 2015,
        tasks: 'windexTasks',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    },
    {
        image: CIRC,
        name: 'Circo Neuronal',
        year: 2015,
        tasks: 'circoTasks',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL']
    },
    {
        image: WESC,
        name: 'WesCountry',
        year: 2015,
        tasks: 'wescountryTasks',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'SVG']
    },
    {
        image: LAND,
        name: 'landportal.info',
        year: 2015,
        tasks: 'landportalTasks',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python', 'MySQL', 'Drupal', 'Bootstrap']
    },
    {
        image: WEBF,
        name: 'Web Foundation',
        year: 2015,
        tasks: 'wfTasks',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB']
    }
];

const Projects = () => {
    const [index, setIndex] = useState(0);

    return (
        <Section id="projects">
            <ProjectWrapper>
                <div className="wrapper">
                    <h2 className="section-title"><Title text="projects" /></h2>
                    <ProjectBox>
                        <Sidebar projects={projects} onChange={(i) => setIndex(i)} />
                        <Viewer projects={projects} index={index} />
                    </ProjectBox>
                </div>
            </ProjectWrapper>
        </Section>
    );
};

export default Projects;
