import React from 'react';

import TypingText from './TypingText/TypingText.component';
import TranslatableTypingText from './TypingText/TranslatableTypingText.component';

import Heart from '../../images/heart.svg';
import HeartSemi from '../../images/heart-semi.svg';

import Puzzle from './Puzzle/Puzzle.component';
import Tetris from './Tetris/Tetris.container';
import Score from './Score/Score.container';
import Level from './Level/Level.container';

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
                        <TypingText text="Juan Castro" />
                        <div>
                            <img alt="" src={Heart} />
                            <img alt="" src={Heart} />
                            <img alt="" src={HeartSemi} />
                        </div>
                    </div>
                    <hr />
                </h1>
                <div className="three-col">
                    <Puzzle />
                    <Tetris />
                    <div className="scores">
                        <TranslatableTypingText className="message" text="welcome" />
                        <TypingText className="message" text="Welcome!" />
                        <Level />
                        <Score />
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
