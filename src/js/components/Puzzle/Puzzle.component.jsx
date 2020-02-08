import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Piece from './Piece.component';
import { shuffle, swapPieces } from './Puzzle.sequence';
import JuanCastro from '../../../images/juan-castro.gif';
import scrollObserver from '../Sections/Section/ScrollObserver';

const Figure = styled.figure`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
`;

const Gif = styled.img`
    width: 100%;
`;

const NUMBER_OF_MOVES = 35;
const SPEED = 80;
const GIF_SHOW_TIME = 5000;

const isMoving = (moving, count) => moving && count < NUMBER_OF_MOVES;

const getPiece = (id, index) => (<Piece key={id} id={id} order={index} />);

const getPieces = (coordinates) => coordinates.map((id, index) => getPiece(id, index));

const getGif = () => (<Gif alt="Juan Castro" id="gif" src={JuanCastro} />);

const Puzzle = () => {
    const ref = useRef(null);
    const [moving, setMoving] = useState(true);
    const [count, setCount] = useState(0);
    const [data, setData] = useState(shuffle());
    const [delay, setDelay] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const move = () => {
        swapPieces(data.coordinates, data.moves[count]);
        setCount(count + 1);
    };

    const registerMove = () => {
        clearTimeout(delay);
        setDelay(setTimeout(move, SPEED));
    };

    const showGif = () => {
        setMoving(false);
        setTimeout(() => setMoving(true), GIF_SHOW_TIME);
    };

    const animate = () => isMoving(moving, count) ? registerMove() : showGif();

    const onClick = () => {
        clearTimeout(delay);
        setMoving(true);
        setCount(0);
        setData(shuffle());
    };

    const render = () => moving ? getPieces(data.coordinates) : getGif();

    useEffect(() => scrolled ? animate() : undefined, [count, scrolled]);

    useEffect(() => scrollObserver.subscribe({ element: ref.current, handler: () => setScrolled(true) }), []);

    return (
        <Figure ref={ref} onClick={onClick}>
            { scrolled ? render() : <React.Fragment /> }
        </Figure>
    );
};

export default Puzzle;
