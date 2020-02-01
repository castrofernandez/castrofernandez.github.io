import React from 'react';
import PropTypes from 'prop-types';
import { TypingParagraph, TypingMessage, TypingLi } from './TypingText.component';
import languageContainer from '../../containers/LanguageContainer';
import Translations from '../../containers/Translations';

const translate = (language, key) => Translations.getTranslationHTML(language, key);

const translatableTypingText = (Tag) => {
    const InnerTranslatableTypingText = ({ text, language, className, speed, initialStatus, finishedHandler }) => {
        return (
            <Tag text={translate(language, text)}
                className={className} speed={speed} initialStatus={initialStatus}
                finishedHandler={finishedHandler} />
        );
    };

    InnerTranslatableTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        initialStatus: PropTypes.string,
        finishedHandler: PropTypes.func
    };

    return InnerTranslatableTypingText;
};

export const TranslatableTypingParagraph = languageContainer(translatableTypingText(TypingParagraph));

export const TranslatableTypingMessage = languageContainer(translatableTypingText(TypingMessage));

export const TranslatableTypingLi = languageContainer(translatableTypingText(TypingLi));
