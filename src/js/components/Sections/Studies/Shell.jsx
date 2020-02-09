import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Commands from './Commands';
import CommandResult from './CommandResult';

const Shell = ({ children, commands, length }) => {
    const [finished, setFinished] = useState(false);

    const onFinished = () => setFinished(true);

    return (
        <React.Fragment>
            <Commands commands={commands} onFinished={onFinished} />
            { finished ? <CommandResult length={length}>{children}</CommandResult> : <React.Fragment /> }
        </React.Fragment>
    );
};

Shell.propTypes = {
    children: PropTypes.node,
    commands: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
};

export default Shell;
