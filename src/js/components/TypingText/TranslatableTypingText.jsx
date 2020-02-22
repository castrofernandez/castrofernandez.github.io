import React from 'react';
import PropTypes from 'prop-types';
import { TypingParagraph, TypingMessage, TypingLi } from './TypingText';
import languageContainer from '../../containers/Language.container';
import Translations from '../../containers/Translations';

const translate = (language, key) => Translations.getTranslationHTML(language, key);

const translatableTypingText = (Tag) => {
    const InnerTranslatableTypingText = ({
        text, language, className, speed, initialStatus, finishedHandler, link
    }) => {
        return (
            <Tag text={translate(language, text)}
                className={className} speed={speed} initialStatus={initialStatus}
                finishedHandler={finishedHandler} link={link} />
        );
    };

    InnerTranslatableTypingText.propTypes = {
        text: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        className: PropTypes.string,
        speed: PropTypes.number,
        initialStatus: PropTypes.string,
        finishedHandler: PropTypes.func,
        link: PropTypes.string
    };

    return InnerTranslatableTypingText;
};

export const TranslatableTypingParagraph = languageContainer(translatableTypingText(TypingParagraph));

export const TranslatableTypingMessage = languageContainer(translatableTypingText(TypingMessage));

export const TranslatableTypingLi = languageContainer(translatableTypingText(TypingLi));

export const TranslatableTypingSpan = languageContainer(translatableTypingText('span'));