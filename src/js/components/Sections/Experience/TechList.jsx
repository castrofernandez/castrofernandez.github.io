import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Desc from './Desc';
import { ArrayStart, ArrayEnd, line, Symbol } from './BasicContent';
import GLOBALS from '../../../styles/globals';

const List = styled.ul`
    list-style: none;
    margin: 0;
`;

const ArrayInline = styled.ul`
    ${line};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15px 0;
    padding: 0;
    list-style: none;

    > :first-child:before {
        content: '[';
        color: ${GLOBALS.colours.text.lighter};
        margin-right: 10px;
    }

    &:after {
        content: ']';
    }

    &:not(:last-child):after {
        content: '],';
    }

    li {
        margin-right: 10px;

        &:first-child {
            margin-left: 10px;
        }

        &:not(:last-child):after {
            content: ',';
            color: ${GLOBALS.colours.text.lighter};
        }
      }
`;

const TechList = ({ technologies }) => (
    <div className="line">
        <Desc>technologies</Desc>
        <ArrayStart />
        <List>
            { Object.entries(technologies).map(([key, lists]) => (
                <li key={key}>
                    <Desc className="line">{key}</Desc>
                    {
                        lists.map((list, index) => (
                            <ArrayInline key={index}>
                                {
                                    list.map((symbol) => (
                                        <li key={symbol}><Symbol>{symbol}</Symbol></li>
                                    ))
                                }
                            </ArrayInline>
                        ))
                    }
                </li>
            )) }
        </List>
        <ArrayEnd />
    </div>
);

TechList.propTypes = {
    technologies: PropTypes.object.isRequired
};

export default TechList;
