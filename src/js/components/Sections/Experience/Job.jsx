import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import { basicContent, line } from './BasicContent';
import JobData from './JobData';

const JobWrapper = styled.article`
    ${basicContent};

    .line {
        ${line};
    }
`;

const Where = styled.h3`
    position: relative;
    
    &.focused {
        width: calc(100% + 20px);
        margin-left: -20px;
        background-color: ${GLOBALS.colours.text.light};
        padding: 5px 0 7px 20px;
        position: relative;

        &:before {
          left: -60px;
        }
    }

    .link {
      a {
        color: ${GLOBALS.colours.link.default};

        &:hover {
          color: ${GLOBALS.colours.link.hover};
        }
      }
      
      &:before {
        content: 'def';
        color: ${GLOBALS.colours.ide.keyword};
        margin-right: 20px;
        text-decoration: none;
      }

      &:after {
        content: 'do';
        color: ${GLOBALS.colours.ide.keyword};
        margin-left: 20px;
        text-decoration: none;
      }
    }
`;

const Job = ({ focused = false, title, link }) => (
    <JobWrapper>
        <Where className={`line ${focused ? 'focused' : ''}`}>
            <span className="link">
                <a href={link} rel="nofollow">
                    {title}
                </a>
            </span>
            { focused ? (<span className="cursor" />) : (<React.Fragment />) }
        </Where>
        <JobData />
        <span className="end line" />
        <span className="line empty" />
    </JobWrapper>
);

Job.propTypes = {
    focused: PropTypes.bool,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};


export default Job;
