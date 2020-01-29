import renderHTML from 'react-render-html';

class Translations {
    constructor() {
        this.translations = {
            ast: {
                home: 'entamu',
                experience: 'esperiencia',
                studies: 'estudios',
                projects: 'proyeutos',
                welcome: '¡Bienveníu!',
                computerScience: 'Informática',
                frontender: 'Desenvolvedor frontend'
            },
            es: {
                home: 'inicio',
                experience: 'experiencia',
                studies: 'estudios',
                projects: 'proyectos',
                welcome: '¡Bienvenido!',
                computerScience: 'Informática',
                frontender: 'Desarrollador frontend'
            },
            en: {
                home: 'home',
                experience: 'experience',
                studies: 'studies',
                projects: 'projects',
                welcome: '¡Bienvenido!',
                computerScience: 'Computer Science',
                frontender: 'Frontend developer'
            }
        };
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
