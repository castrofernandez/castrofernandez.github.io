import React from 'react';
import PropTypes from 'prop-types';

import languageContainer from '../../containers/Language.container';
import Translations from '../../containers/Translations';

const translate = (language, key) => Translations.getTranslationHTML(language, key);

const Translation = ({ language, text }) => (
    <React.Fragment>{translate(language, text)}</React.Fragment>
);

Translation.propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default languageContainer(Translation);
