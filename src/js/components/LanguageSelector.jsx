import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectorItem from './SelectorItem';
import GLOBALS from '../styles/globals';

import languageContainer from '../containers/Language.container';

const NavWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const Li = styled.li`
    flex: 0 0 auto;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        a {
          background-color: ${GLOBALS.colours.primary};
          color: #fff;
          text-align: center;
        }
      }
`;

const LANGUAGES = {
    ast: 'Asturianu',
    es: 'Español',
    en: 'English'
};

export const LANGUAGE_LIST = Object.keys(LANGUAGES);

const onLanguageChange = (changeLanguage, id) => (e) => {
    e.preventDefault();
    changeLanguage(id);
};

const LanguageSelector = ({ language, changeLanguage }) => (
    <NavWrapper>
        {Object.entries(LANGUAGES).map(([id, name]) => {
            return (
                <Li className={id === language ? 'active' : ''} key={id}>
                    <SelectorItem className="squared"
                        href={`/?lang=${id}`}
                        title={name}
                        onClick={onLanguageChange(changeLanguage, id)}>
                        {id.toString().toUpperCase()}
                    </SelectorItem>
                </Li>
            );
        })}
    </NavWrapper>
);

LanguageSelector.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

export default languageContainer(LanguageSelector);
