import React from 'react';

import { TypingParagraph, TypingLi } from './TypingText/TypingText.component';
import { TranslatableTypingParagraph, TranslatableTypingLi } from './TypingText/TranslatableTypingText.component';

import Heart from '../../images/heart.svg';
import HeartSemi from '../../images/heart-semi.svg';

import Puzzle from './Puzzle/Puzzle.component';
import Tetris from './Tetris/Tetris.container';
import Score from './Score/Score.container';
import Level from './Level/Level.container';
import TypingChain from './TypingText/TypingChain.component';

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
                        <TypingParagraph text="Juan Castro" />
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
                        <TranslatableTypingParagraph className="message" text="welcome" />
                        <TypingParagraph className="message" text="Welcome!" />
                        <Level />
                        <Score />
                    </div>
                </div>

                <h2>
                    <TypingChain>
                        <TranslatableTypingLi text="computerScience" />
                        <TranslatableTypingLi text="frontender" />
                        <TranslatableTypingLi text="fullstack" />
                    </TypingChain>

                    <TypingChain>
                        <TypingLi text="JavaScript" />
                        <TypingLi text="React" />
                        <TypingLi text="Vue" />
                        <TypingLi text="Redux" />
                        <TypingLi text="HTML5" />
                        <TypingLi text="CSS3" />
                    </TypingChain>

                    <TypingChain>
                        <TypingLi text="Ruby" />
                        <TypingLi text="Rails" />
                        <TypingLi text="Java" />
                        <TypingLi text="Python" />
                        <TypingLi text="PHP" />
                        <TypingLi text="Node" />
                        <TranslatableTypingLi text="designPatterns" />
                    </TypingChain>
                </h2>

            </div>
        </section>
    </React.Fragment>
);

export default Intro;
