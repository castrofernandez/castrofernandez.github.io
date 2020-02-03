import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Position from './Position';
import Description from './Description';
import Desc from './Desc';
import When from './When';

const JobDataWrapper = styled.div`
    padding-left: 80px;

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        padding-left: 30px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        padding-left: 0;
    }

    .array-start,
    .array-end {
      display: block;
      margin-top: $line-margin;

      &:after {
        content: '[';
      }
    }

    .array-end {
      &:after {
        content: ']';
      }
    }
`;

const JobData = () => (
    <JobDataWrapper className="line">
        <span className="array-start unindent" />
        <Position />
        <When />
        <Description />
        <div className="technologies line">
            <Desc>technologies</Desc>
            <span className="array-start line" />
            <ul>
                <li>
                    <span className="desc line">backend</span>
                    <ul className="array inline line">
                        <li>
                            <span className="symbol">Java</span>
                        </li>
                        <li>
                            <span className="symbol">JBoss</span>
                        </li>
                        <li>
                            <span className="symbol">Jenkins</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="desc line">frontend</span>
                    <ul className="array inline line">
                        <li>
                            <span className="symbol">HTML5</span>
                        </li>
                        <li>
                            <span className="symbol">CSS3</span>
                        </li>
                        <li>
                            <span className="symbol">jQuery</span>
                        </li>
                        <li>
                            <span className="symbol">SASS</span>
                        </li>
                    </ul>
                    <ul className="array inline line">
                        <li>
                            <span className="symbol">Webpack</span>
                        </li>
                        <li>
                            <span className="symbol">Underscore.js</span>
                        </li>
                        <li>
                            <span className="symbol">NPM</span>
                        </li>
                    </ul>
                    <ul className="array inline line">
                        <li>
                            <span className="symbol">Cucumber</span>
                        </li>
                        <li>
                            <span className="symbol">Gherkin</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <span className="array-end line" />
        </div>
        <span className="array-end unindent line" />
    </JobDataWrapper>
);

export default JobData;
