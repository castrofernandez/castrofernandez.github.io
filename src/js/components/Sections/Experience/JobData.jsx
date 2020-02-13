import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Position from './Position';
import Description from './Description.container';
import When from './When';
import TechList from './TechList';
import { ArrayStart, ArrayEnd } from './BasicContent';

const JobDataWrapper = styled.div`
    padding-left: 80px;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        padding-left: 30px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        padding-left: 0;
    }
`;

const JobData = ({ position, from, to, description, technologies }) => (
    <JobDataWrapper>
        <ArrayStart className="unindent" />
        <Position position={position} />
        <When from={from} to={to} />
        <Description description={description} />
        <TechList technologies={technologies} />
        <ArrayEnd className="unindent" />
    </JobDataWrapper>
);

JobData.propTypes = {
    position: PropTypes.string.isRequired,
    from: PropTypes.number.isRequired,
    to: PropTypes.number,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.object.isRequired
};

export default JobData;
