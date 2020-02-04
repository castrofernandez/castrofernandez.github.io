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
      i {
          font-style: normal;
      }

      a, i {
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

const getLink = (link, title) => <a href={link} rel="nofollow">{title}</a>;

const Job = ({ focused = false, title, link, position, from, to, description, technologies }) => (
    <JobWrapper>
        <Where className={`line ${focused ? 'focused' : ''}`}>
            <span className="link">
                { link ? getLink(link, title) : <i>{title}</i> }
            </span>
            { focused ? (<span className="cursor" />) : (<React.Fragment />) }
        </Where>
        <JobData position={position} from={from} to={to} description={description} technologies={technologies} />
        <span className="end line" />
        <span className="line empty" />
    </JobWrapper>
);

Job.propTypes = {
    focused: PropTypes.bool,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    position: PropTypes.string.isRequired,
    from: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.number,
    technologies: PropTypes.object.isRequired
};

export default Job;
