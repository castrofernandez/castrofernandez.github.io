import React, { useState, useEffect } from 'react';

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
        <p className="clock">
            <span className="time hour">{formatTime(time.getHours().toString())}</span>
            <span className="blinker" />
            <span className="time minutes">{formatTime(time.getMinutes().toString())}</span>
            <span className="seconds">{formatTime(time.getSeconds().toString())}</span>
        </p>
    );
};

export default Clock;
