import React from 'react';

import { TypingLi } from './TypingText/TypingText.component';
import { TranslatableTypingLi } from './TypingText/TranslatableTypingText.component';

import Puzzle from './Puzzle/Puzzle.component';
import Tetris from './Tetris/Tetris.container';
import TypingChain from './TypingText/TypingChain.component';
import Scores from './Scores';
import Title from './Title';

const Intro = () => (
    <React.Fragment>
        <span id="intro" className="anchor" />
        <section
            className="intro cv-section animation-section"
            data-section="intro"
        >
            <div className="wrapper">
                <Title />
                <div className="three-col">
                    <Puzzle />
                    <Tetris />
                    <Scores />
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
