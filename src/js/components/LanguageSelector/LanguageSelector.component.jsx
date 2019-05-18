import React from 'react';
import PropTypes from 'prop-types';

const LANGUAGES = {
    ast: 'Asturianu',
    es: 'Español',
    en: 'English'
};

export const LANGUAGE_LIST = Object.keys(LANGUAGES);

const LanguageSelector = ({ language, changeLanguage }) => (
    <ul className="languages">
        {Object.entries(LANGUAGES).map(([id, name]) => {
            return (
                <li className={id === language ? 'active' : ''} key={id}>
                    <a
                        href={`/?lang=${id}`}
                        className="lang-s"
                        title={name}
                        data-language={id}
                        onClick={e => {
                            e.preventDefault();
                            changeLanguage(id);
                        }}
                    >
                        {id.toString().toUpperCase()}
                    </a>
                </li>
            );
        })}
    </ul>
);

LanguageSelector.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

export default LanguageSelector;
