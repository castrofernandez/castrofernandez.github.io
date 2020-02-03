import React from 'react';
import styled from 'styled-components';

import GLOBALS from '../../../styles/globals';
import Job from './Job';

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
        <Job focused title="eDreams" link="https://www.edreamsodigeo.com/" />

        <Job title="The Cocktail" link="https://the-cocktail.com/" />

        {/* <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    <a href="https://the-cocktail.com/" rel="nofollow">
                        The Cocktail
                    </a>
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Full Stack"
                        data-ast="Desenvolvedor Full Stack"
                    >
                        Full Stack Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2016</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2017</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Desarrollo web y mantenimiento de aplicaciones"
                        data-ast="Desenvuelvo web y caltenimientu d'aplicaciones"
                    >
                        Web development and application maintenance
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">backend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Ruby</span>
                                </li>
                                <li>
                                    <span className="symbol">Rails</span>
                                </li>
                                <li>
                                    <span className="symbol">Elixir</span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">PHP</span>
                                </li>
                                <li>
                                    <span className="symbol">Laravel</span>
                                </li>
                                <li>
                                    <span className="symbol">Symfony</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">frontend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">HTML5</span>
                                </li>
                                <li>
                                    <span className="symbol">CSS3</span>
                                </li>
                                <li>
                                    <span className="symbol">jQuery</span>
                                </li>
                                <li>
                                    <span className="symbol">SASS</span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Webpack</span>
                                </li>
                                <li>
                                    <span className="symbol">Gulp</span>
                                </li>
                                <li>
                                    <span className="symbol">NPM</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">database</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">MySQL</span>
                                </li>
                                <li>
                                    <span className="symbol">PostgreSQL</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">cms</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Drupal</span>
                                </li>
                                <li>
                                    <span className="symbol">Refinery</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article>

        <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    <a href="http://www.simbiosys.es/" rel="nofollow">
                        Simbiosys
                    </a>
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Full Stack"
                        data-ast="Desenvolvedor Full Stack"
                    >
                        Full Stack Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2015</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2016</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Desarrollo web y gestión de proyectos"
                        data-ast="Desenvuelvo web y xestión de proyectos"
                    >
                        Web development and project management
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">backend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">PHP</span>
                                </li>
                                <li>
                                    <span className="symbol">Python</span>
                                </li>
                                <li>
                                    <span className="symbol">Node.js</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">frontend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">HTML5</span>
                                </li>
                                <li>
                                    <span className="symbol">CSS3</span>
                                </li>
                                <li>
                                    <span className="symbol">jQuery</span>
                                </li>
                                <li>
                                    <span className="symbol">SASS</span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">CoffeeScript</span>
                                </li>
                                <li>
                                    <span className="symbol">Grunt</span>
                                </li>
                                <li>
                                    <span className="symbol">NPM</span>
                                </li>
                                <li>
                                    <span className="symbol">
                                        Handlebars.js
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">database</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">MySQL</span>
                                </li>
                                <li>
                                    <span className="symbol">MongoDB</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">cms</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Drupal</span>
                                </li>
                                <li>
                                    <span className="symbol">WordPress</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article>

        <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    <a href="http://www.weso.es/" rel="nofollow">
                        Weso
                    </a>
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Full Stack"
                        data-ast="Desenvolvedor Full Stack"
                    >
                        Full Stack Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2013</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2014</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Desarrollo web y gestión de proyectos"
                        data-ast="Desenvuelvo web y xestión de proyectos"
                    >
                        Web development and project management
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">backend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">PHP</span>
                                </li>
                                <li>
                                    <span className="symbol">Python</span>
                                </li>
                                <li>
                                    <span className="symbol">Node.js</span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Flask</span>
                                </li>
                                <li>
                                    <span className="symbol">Express JS</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">frontend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">HTML5</span>
                                </li>
                                <li>
                                    <span className="symbol">CSS3</span>
                                </li>
                                <li>
                                    <span className="symbol">jQuery</span>
                                </li>
                                <li>
                                    <span className="symbol">SASS</span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">CoffeeScript</span>
                                </li>
                                <li>
                                    <span className="symbol">Grunt</span>
                                </li>
                                <li>
                                    <span className="symbol">NPM</span>
                                </li>
                                <li>
                                    <span className="symbol">
                                        Handlebars.js
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">database</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">MySQL</span>
                                </li>
                                <li>
                                    <span className="symbol">MongoDB</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">cms</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">Drupal</span>
                                </li>
                                <li>
                                    <span className="symbol">WordPress</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article>

        <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    <a href="http://www.espiralms.com/" rel="nofollow">
                        Espiral Microsistemas
                    </a>
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Full Stack"
                        data-ast="Desenvolvedor Full Stack"
                    >
                        Full Stack Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2010</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2013</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Desarrollo web y mantenimiento de producto"
                        data-ast="Desenvuelvo web y caltenimientu de productu"
                    >
                        Web development and product maintenance
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">backend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">C#</span>
                                </li>
                                <li>
                                    <span className="symbol">ASP .NET</span>
                                </li>
                                <li>
                                    <span className="symbol">C++</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">frontend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">HTML5</span>
                                </li>
                                <li>
                                    <span className="symbol">CSS3</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">database</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">
                                        Microsoft SQL Serve
                                    </span>
                                </li>
                                <li>
                                    <span className="symbol">Oracle</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article>

        <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    <a href="http://www.ingesco.es/" rel="nofollow">
                        Ingesco Sistemas Informáticos
                    </a>
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Backend"
                        data-ast="Desenvolvedor Backend"
                    >
                        Backend Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2008</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2010</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Desarrollo web y mantenimiento de aplicaciones"
                        data-ast="Desenvuelvo web y caltenimientu d'aplicaciones"
                    >
                        Web development and application maintenance
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">backend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">C#</span>
                                </li>
                                <li>
                                    <span className="symbol">BASIC</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">frontend</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">HTML5</span>
                                </li>
                                <li>
                                    <span className="symbol">CSS3</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="desc line">database</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">PICK D3</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article>

        <article className="unit animation-section fading">
            <h3 className="where line">
                <span className="link">
                    Centro de Estudios Técnicos Superiores
                </span>
            </h3>
            <div className="unit-data line">
                <span className="array-start unindent" />
                <h4 className="position trail-comma line">
                    <span className="desc">position</span>
                    <span
                        className="string"
                        data-es="Desarrollador Backend"
                        data-ast="Desenvolvedor Backend"
                    >
                        Backend Developer
                    </span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">from</span>
                    <span className="number">2008</span>
                </h4>
                <h4 className="when trail-comma line">
                    <span className="desc">to</span>
                    <span className="number">2010</span>
                </h4>
                <h5 className="description trail-comma line">
                    <span className="desc">description</span>
                    <span
                        className="string"
                        data-es="Profesor de clases particulares para universitarios"
                        data-ast="Profesor de clases particulares para universitarios"
                    >
                        Private lessons teacher for College students
                    </span>
                </h5>
                <div className="technologies line">
                    <span className="desc">technologies</span>
                    <span className="array-start line" />
                    <ul>
                        <li>
                            <span className="desc line">subjects</span>
                            <ul className="array inline line">
                                <li>
                                    <span className="symbol">C++</span>
                                </li>
                                <li>
                                    <span
                                        className="symbol"
                                        data-es="Introducción a la Programación"
                                        data-ast="Introducción a la Programación"
                                    >
                                        Programming introduction
                                    </span>
                                </li>
                            </ul>
                            <ul className="array inline line">
                                <li>
                                    <span
                                        className="symbol"
                                        data-es="Estructuras de datos"
                                        data-ast="Estructures de datos"
                                    >
                                        Data Structures
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className="symbol"
                                        data-es="Algoritmia"
                                        data-ast="Algoritmia"
                                    >
                                        Algorithms
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="array-end line" />
                </div>
                <span className="array-end unindent line" />
            </div>
            <span className="end line" />
            <span className="line empty" />
        </article> */}
    </IdeWrapper>
);

export default Ide;
