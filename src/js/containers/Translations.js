import renderHTML from 'react-render-html';

class Translations {
    constructor() {
        this.translations = {
            ast: {
                intro: 'entamu',
                experience: 'esperiencia',
                studies: 'estudios',
                projects: 'proyeutos',
                welcome: '¡Bienveníu!',
                computerScience: 'Informática',
                frontender: 'Desenvolvedor frontend',
                fullstack: 'Desenvolvedor fullstack',
                designPatterns: 'Patrones de diseñu',
                edreamsPosition: 'Desenvolvedor Full Stack',
                edreamsDescription: 'Desenvuelvo web y caltenimientu de productu',
                theCocktailPosition: 'Desenvolvedor Full Stack',
                theCocktailDescription: 'Desenvuelvo web y caltenimientu d\'aplicaciones',
                simbiosysPosition: 'Desenvolvedor Full Stack',
                simbiosysDescription: 'Desenvuelvo web y xestión de proyectos',
                wesoPosition: 'Desenvolvedor Full Stack',
                wesoDescription: 'Desenvuelvo web y xestión de proyectos',
                espiralPosition: 'Desenvolvedor Full Stack',
                espiralDescription: 'Desenvuelvo web y caltenimientu de productu',
                ingescoPosition: 'Desenvolvedor Backend',
                ingescoDescription: 'Desenvuelvo web y caltenimientu d\'aplicaciones',
                cetsPosition: 'Maestru',
                cetsDescription: 'Profesor de clases particulares para universitarios',
                programming: 'Introducción a la Programación',
                dataStructures: 'Estructures de datos',
                algorithms: 'Algoritmia',
                master: 'Máster n\'Inxeniería Web',
                compilers: 'Compiladores ya intérpretes',
                degree: 'Inxeniería Informática de Sistemes',
                operatingSystems: 'Sistemes Operativos',
                networks: 'Redes',
                dataBases: 'Bases de Datos',
                softwareEngineering: 'Inxeniería del Software',
                universityOviedo: 'Universidá d\'Uviéu',
                ireland: 'Irlanda',
                spanish: 'Español',
                asturian: 'Asturianu',
                english: 'Inglés',
                french: 'Francés',
                german: 'Alemán',
                italian: 'Italianu',
                native: 'Falante nativu',
                basicKnowledge: 'Conocencies básiques',
                eoi: 'Escuela Oficial d\'Idiomes'
            },
            es: {
                intro: 'inicio',
                experience: 'experiencia',
                studies: 'estudios',
                projects: 'proyectos',
                welcome: '¡Bienvenido!',
                computerScience: 'Informática',
                frontender: 'Desarrollador frontend',
                fullstack: 'Desarrollador fullstack',
                designPatterns: 'Patrones de diseño',
                edreamsPosition: 'Desarrollador Full Stack',
                edreamsDescription: 'Desarrollo web y mantenimiento de producto',
                theCocktailPosition: 'Desarrollador Full Stack',
                theCocktailDescription: 'Desarrollo web y mantenimiento de aplicaciones',
                simbiosysPosition: 'Desarrollador Full Stack',
                simbiosysDescription: 'Desarrollo web y gestión de proyectos',
                wesoPosition: 'Desarrollador Full Stack',
                wesoDescription: 'Desarrollo web y gestión de proyectos',
                espiralPosition: 'Desarrollador Full Stack',
                espiralDescription: 'Desarrollo web y mantenimiento de producto',
                ingescoPosition: 'Desarrollador Backend',
                ingescoDescription: 'Desarrollo web y mantenimiento de aplicaciones',
                cetsPosition: 'Profesor',
                cetsDescription: 'Profesor de clases particulares para universitarios',
                programming: 'Introducción a la Programación',
                dataStructures: 'Estructuras de datos',
                algorithms: 'Algoritmia',
                master: 'Máster en Ingeniería Web',
                compilers: 'Compiladores e intérpretes',
                degree: 'Ingeniería Informática de Sistemas',
                operatingSystems: 'Sistemas Operativos',
                networks: 'Redes',
                dataBases: 'Bases de Datos',
                softwareEngineering: 'Ingeniería del Software',
                universityOviedo: 'Universidad de Oviedo',
                ireland: 'Irlanda',
                spanish: 'Español',
                asturian: 'Asturiano',
                english: 'Inglés',
                french: 'Francés',
                german: 'Alemán',
                italian: 'Italiano',
                native: 'Hablante nativo',
                basicKnowledge: 'Conocimientos básicos',
                eoi: 'Escuela Oficial de Idiomas'
            },
            en: {
                intro: 'home',
                experience: 'experience',
                studies: 'studies',
                projects: 'projects',
                welcome: '¡Bienvenido!',
                computerScience: 'Computer Science',
                frontender: 'Frontend developer',
                fullstack: 'Fullstack developer',
                designPatterns: 'Design patterns',
                edreamsPosition: 'Full Stack Developer',
                edreamsDescription: 'Web development and application maintenance',
                theCocktailPosition: 'Full Stack Developer',
                theCocktailDescription: 'Web development and application maintenance',
                simbiosysPosition: 'Full Stack Developer',
                simbiosysDescription: 'Web development and project management',
                wesoPosition: 'Full Stack Developer',
                wesoDescription: 'Web development and project management',
                espiralPosition: 'Full Stack Developer',
                espiralDescription: 'Web development and product maintenance',
                ingescoPosition: 'Backend Developer',
                ingescoDescription: 'Web development and application maintenance',
                cetsPosition: 'Teacher',
                cetsDescription: 'Private lessons teacher for College students',
                programming: 'Programming Introduction',
                dataStructures: 'Data Structures',
                algorithms: 'Algorithms',
                master: 'Master in Web Engineering',
                compilers: 'Compilers and Interpreters',
                degree: 'Computer Engineering',
                operatingSystems: 'Operating Systems',
                networks: 'Networks',
                dataBases: 'Data Bases',
                softwareEngineering: 'Software Engineering',
                universityOviedo: 'University of Oviedo',
                ireland: 'Ireland',
                spanish: 'Spanish',
                asturian: 'Asturian',
                english: 'English',
                french: 'French',
                german: 'German',
                italian: 'Italian',
                native: 'Native Speaker',
                basicKnowledge: 'Basic Knowledge',
                eoi: 'State Language School'
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
