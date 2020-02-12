import renderHTML from 'react-render-html';

import ast from './keys/ast';
import es from './keys/es';
import en from './keys/en';

class Translations {
    constructor() {
        this.translations = { ast, es, en };
    }

    getTranslations(language) {
        return this.translations[language];
    }

    getTranslation(language, key) {
        const translations = this.getTranslations(language);

        return translations ? translations[key] : null;
    }

    getTranslationHTML(language, key) {
        const translation = this.getTranslation(language, key);

        return translation ? renderHTML(translation) : '';
    }
}

export default new Translations();
