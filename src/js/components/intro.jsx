import React from 'react';

import JuanCastro from '../../images/juan-castro.gif';
import Heart from '../../images/heart.svg';
import HeartSemi from '../../images/heart-semi.svg';

import Puzzle1 from '../../images/puzzle/1.png';
import Puzzle2 from '../../images/puzzle/2.png';
import Puzzle3 from '../../images/puzzle/3.png';
import Puzzle4 from '../../images/puzzle/4.png';
import Puzzle5 from '../../images/puzzle/5.png';
import Puzzle6 from '../../images/puzzle/6.png';
import Puzzle7 from '../../images/puzzle/7.png';
import Puzzle8 from '../../images/puzzle/8.png';
import Puzzle9 from '../../images/puzzle/9.png';
import Puzzle10 from '../../images/puzzle/10.png';
import Puzzle11 from '../../images/puzzle/11.png';
import Puzzle12 from '../../images/puzzle/12.png';
import Puzzle13 from '../../images/puzzle/13.png';
import Puzzle14 from '../../images/puzzle/14.png';
import Puzzle15 from '../../images/puzzle/15.png';
import Puzzle16 from '../../images/puzzle/16.png';

const Intro = () => (
    <React.Fragment>
        <span id="intro" className="anchor" />
        <section
            className="intro cv-section animation-section"
            data-section="intro"
        >
            <div className="wrapper">
                <h1>
                    <div className="line">
                        <p className="typing">Juan Castro</p>
                        <div>
                            <img alt="" src={Heart} />
                            <img alt="" src={Heart} />
                            <img alt="" src={HeartSemi} />
                        </div>
                    </div>
                    <hr />
                </h1>
                <div className="three-col">
                    <figure>
                        <img
                            alt="Juan Castro"
                            className="gif"
                            id="gif"
                            src={JuanCastro}
                        />
                        <div className="puzzle" id="puzzle">
                            <picture>
                                <img alt="" src={Puzzle1} />
                                <img alt="" src={Puzzle2} />
                                <img alt="" src={Puzzle3} />
                                <img alt="" src={Puzzle4} />
                                <img alt="" src={Puzzle5} />
                                <img alt="" src={Puzzle6} />
                                <img alt="" src={Puzzle7} />
                                <img alt="" src={Puzzle8} />
                                <img alt="" src={Puzzle9} />
                                <img alt="" src={Puzzle10} />
                                <img alt="" src={Puzzle11} />
                                <img alt="" src={Puzzle12} />
                                <img alt="" src={Puzzle13} />
                                <img alt="" src={Puzzle14} />
                                <img alt="" src={Puzzle15} />
                                <img alt="" src={Puzzle16} />
                            </picture>
                        </div>
                    </figure>
                    <div className="tetris" id="tetris" />
                    <div className="scores">
                        <p
                            className="message typing"
                            data-es="¡Bienvenido!"
                            data-ast="¡Bienveníu!"
                        >
                            ¡Bienvenido!
                        </p>
                        <p className="message typing">Welcome!</p>
                        <p className="message">
                            <span id="level" />
                        </p>
                        <div className="score">
                            <span />
                            <p id="score">0250</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>
                <ul className="typing-chain">
                    <li
                        data-es="Informática"
                        data-ast="Informática"
                        className="typing-child"
                    >
                        Computer Science
                    </li>
                    <li
                        data-es="Desarrollador Front"
                        data-ast="Desenvolvedor Front"
                        className="typing-child"
                    >
                        Front Developer
                    </li>
                    <li data-es="Diseño" data-ast="Diseñu" className="typing-child">
                        Design
                    </li>
                </ul>
                <ul className="typing-chain">
                    <li
                        data-es="Desarrollador Back"
                        data-ast="Desenvolvedor Back"
                        className="typing-child"
                    >
                        Back Developer
                    </li>
                    <li className="typing-child">Ruby</li>
                    <li className="typing-child">Python</li>
                </ul>
                <ul className="typing-chain">
                    <li className="typing-child">Rails</li>
                    <li className="typing-child">PHP</li>
                    <li className="typing-child">Laravel</li>
                    <li className="typing-child">Symfony</li>
                    <li className="typing-child">SASS</li>
                    <li className="typing-child">JavaScript</li>
                </ul>
            </h2>
        </section>
    </React.Fragment>
);

export default Intro;
