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
                frontender: 'Desenvolvedor frontend',
                fullstack: 'Desenvolvedor fullstack',
                designPatterns: 'Patrones de diseñu'
            },
            es: {
                home: 'inicio',
                experience: 'experiencia',
                studies: 'estudios',
                projects: 'proyectos',
                welcome: '¡Bienvenido!',
                computerScience: 'Informática',
                frontender: 'Desarrollador frontend',
                fullstack: 'Desarrollador fullstack',
                designPatterns: 'Patrones de diseño'
            },
            en: {
                home: 'home',
                experience: 'experience',
                studies: 'studies',
                projects: 'projects',
                welcome: '¡Bienvenido!',
                computerScience: 'Computer Science',
                frontender: 'Frontend developer',
                fullstack: 'Fullstack developer',
                designPatterns: 'Design patterns'
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
