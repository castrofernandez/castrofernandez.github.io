import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Job from './Job';
import TranslatableTypingSpan from '../../Translatable/Translatable.container';

const IdeWrapper = styled.div`
    position: relative;
    font: 400 30px/22px ${GLOBALS.fonts.pixelCondensed};
    color: ${GLOBALS.colours.text.lighter};

    @media (max-width: ${GLOBALS.sizes.smallDesktop}) {
        font-size: 24px;
        line-height: 26px;
    }
`;

const Ide = () => (
    <IdeWrapper>
        <Job focused
            title="eDreams"
            link="https://www.edreamsodigeo.com/"
            position="edreamsPosition"
            from={2017}
            description="edreamsDescription"
            technologies={{
                backend: [
                    ['Java', 'JBoss', 'Jenkins']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'React', 'SASS', 'jQuery'],
                    ['ES6', 'Webpack', 'NPM', 'Backbone'],
                    ['Underscore.js', 'Cucumber', 'Gherkin', 'Bable']
                ]
            }} />

        <Job title="The Cocktail"
            link="https://the-cocktail.com/"
            position="theCocktailPosition"
            from={2016}
            to={2017}
            description="theCocktailDescription"
            technologies={{
                backend: [
                    ['Ruby', 'Rails', 'Elixir'],
                    ['PHP', 'Laravel', 'Symfony']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'SASS', 'jQuery'],
                    ['ES6', 'Webpack', 'NPM', 'Gulp']
                ],
                database: [
                    ['MySQL', 'PostgreSQL']
                ],
                cms: [
                    ['Drupal', 'Refinery']
                ]
            }} />

        <Job title="Simbiosys"
            link="http://www.simbiosys.es/"
            position="simbiosysPosition"
            from={2015}
            to={2016}
            description="simbiosysDescription"
            technologies={{
                backend: [
                    ['PHP', 'Python', 'Node.js']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'SASS', 'jQuery'],
                    ['CoffeeScript', 'Grunt', 'NPM', 'Handlebars.js']
                ],
                database: [
                    ['MySQL', 'MongoDB']
                ],
                cms: [
                    ['Drupal', 'WordPress']
                ]
            }} />

        <Job title="Weso"
            link="http://www.weso.es/"
            position="wesoPosition"
            from={2013}
            to={2014}
            description="wesoDescription"
            technologies={{
                backend: [
                    ['PHP', 'Python', 'Node.js'],
                    ['Flask', 'Express JS']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'SASS', 'jQuery'],
                    ['CoffeeScript', 'Grunt', 'NPM', 'Handlebars.js']
                ],
                database: [
                    ['MySQL', 'MongoDB']
                ],
                cms: [
                    ['Drupal', 'WordPress']
                ]
            }} />

        <Job title="Espiral Microsistemas"
            link="http://www.espiralms.com/"
            position="espiralPosition"
            from={2010}
            to={2013}
            description="espiralDescription"
            technologies={{
                backend: [
                    ['C#', 'ASP .NET', 'C++']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'jQuery']
                ],
                database: [
                    ['Microsoft SQL Server', 'Oracle']
                ]
            }} />

        <Job title="Ingesco Sistemas Informáticos"
            link="http://www.ingesco.es/"
            position="ingescoPosition"
            from={2008}
            to={2010}
            description="ingescoDescription"
            technologies={{
                backend: [
                    ['C#', 'BASIC']
                ],
                frontend: [
                    ['HTML5', 'CSS3', 'jQuery']
                ],
                database: [
                    ['PICK D3']
                ]
            }} />

        <Job title="Centro de Estudios Técnicos Superiores"
            position="cetsPosition"
            from={2007}
            to={2008}
            description="cetsDescription"
            technologies={{
                subjects: [
                    ['C++', <TranslatableTypingSpan text="programming" />],
                    [<TranslatableTypingSpan text="dataStructures" />, <TranslatableTypingSpan text="algorithms" />]
                ]
            }} />
    </IdeWrapper>
);

export default Ide;
