import React from 'react';
import PropTypes from 'prop-types';
import { TypingParagraph, TypingLi } from './TypingText.component';
import languageContainer from '../../containers/LanguageContainer';
import Translations from '../../containers/Translations';

const translate = (language, key) => Translations.getTranslationHTML(language, key);

const translatableTypingText = (Tag) => {
    const InnerTranslatableTypingText = ({ text, language, className }) => {
        return (
            <Tag text={translate(language, text)} className={className} />
        );
    };

    InnerTranslatableTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    return InnerTranslatableTypingText;
};

export const TranslatableTypingParagraph = languageContainer(translatableTypingText(TypingParagraph));

export const TranslatableTypingLi = languageContainer(translatableTypingText(TypingLi));
