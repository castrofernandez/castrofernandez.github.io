import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import Piece from './Piece.component';
import Gif from './Gif.component';
import sizeme from 'sizeme';
import { PuzzleWrapper, Picture } from './Puzzle.styles';

import { generateSequence, NUMBER_MOVEMENTS } from './Puzzle.sequence';

const Figure = styled.figure`
    display: block;
    position: relative;
    margin: 0;
`;

const PUZZLE_SPEED = 80;
const GIF_SHOW_TIME = 5000;
const SIZE = 4;

const round = number => Math.round(number / SIZE) * SIZE;

const getMobileWidth = () =>
    round(window.innerWidth > 0 ? window.innerWidth : screen.width);

const getPuzzleWidth = puzzle => {
    return sizeme.isMobile() ? getMobileWidth() : round(puzzle.offsetWidth);
};

const getPieceWidth = puzzle => getPuzzleWidth(puzzle) / SIZE;

const movePiece = (coordinates, [previous, next]) => {
    const current = coordinates[previous];
    coordinates[previous] = [...coordinates[next]];
    coordinates[next] = current;
};

const Puzzle = () => {
    const puzzleEl = useRef(null);
    const [width, setWidth] = useState(getPieceWidth(puzzleEl));
    const [sequence, setSequence] = useState({ coordinates: [] });
    const [count, setCount] = useState(null);
    const [interval, setInterval] = useState(null);
    const [clickable, setClickable] = useState(false);
    const [showingGif, setShowingGif] = useState(false);

    const hideGif = () => {
        setClickable(false);
        setShowingGif(false);
    };

    const onClick = () => {
        hideGif();
        clearInterval(interval);
        setSequence(generateSequence(width));
        setCount(-1);
    };

    const showGif = () => {
        setClickable(true);
        setShowingGif(true);

        setTimeout(() => setShowingGif(false), GIF_SHOW_TIME);
    };

    const animateMovement = counter => {
        if (counter < NUMBER_MOVEMENTS) {
            const timeout = setTimeout(() => {
                movePiece(sequence.coordinates, sequence.movements[counter]);
                setCount(counter);
            }, PUZZLE_SPEED);

            setInterval(timeout);
        } else {
            showGif();
        }
    };

    const handleResize = () => {
        setWidth(getPieceWidth(puzzleEl.current.offsetWidth));
    };

    const startPuzzle = pieceWidth => {
        hideGif();
        setWidth(pieceWidth);
        setSequence(generateSequence(pieceWidth));
        setCount(-1);
    };

    useEffect(() => {
        startPuzzle(getPieceWidth(puzzleEl.current));

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [puzzleEl]);

    useEffect(() => {
        if (sequence.coordinates.length) {
            animateMovement(count + 1);
        }
    }, [count]);

    return (
        <Figure>
            <Gif show={showingGif} />
            <PuzzleWrapper ref={puzzleEl} style={{ width: `${width * SIZE}px` }}
                onClick={clickable ? onClick : () => {}}>
                <Picture>
                    {sequence.coordinates.map((item, i) => {
                        return (
                            <Piece
                                id={`${i + 1}`}
                                key={i + 1}
                                width={width}
                                coordinates={item}
                            />
                        );
                    })}
                </Picture>
            </PuzzleWrapper>
        </Figure>
    );
};

export default Puzzle;
