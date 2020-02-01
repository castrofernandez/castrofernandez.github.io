import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import GLOBALS from '../styles/globals';

const ClockWrapper = styled.p`
    margin: -2px 0 0 0;
    color: ${GLOBALS.colours.text.lighter};
    height: 70px;

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        height: 40px;
    }

    @media (max-width: ${GLOBALS.sizes.mobile}) {
        display: none;
    }
`;

const Time = styled.span`
    font: 400 80px/70px ${GLOBALS.fonts.pixel};

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        font-size: 30px;
        line-height: 40px;
    }
`;

const Seconds = styled.span`
    font: 400 60px/70px ${GLOBALS.fonts.pixel};

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        font-size: 22px;
        line-height: 40px;
    }
`;

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

const Blinker = styled.span`
    font: 400 80px/70px ${GLOBALS.fonts.pixel};
    animation: ${blink} 1s ease infinite;

    @media (max-width: ${GLOBALS.sizes.tablet}) {
        font-size: 30px;
        line-height: 40px;
    }

    &:before {
        content: ':';
    }
`;

const formatTime = (value) => value.length < 2 ? '0' + value : value;

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ClockWrapper>
            <Time className="hour">{formatTime(time.getHours().toString())}</Time>
            <Blinker />
            <Time className="minutes">{formatTime(time.getMinutes().toString())}</Time>
            <Seconds>{formatTime(time.getSeconds().toString())}</Seconds>
        </ClockWrapper>
    );
};

export default Clock;
