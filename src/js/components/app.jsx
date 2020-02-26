import React from 'react';

import ScrollStyle from '../styles/scroll';
import Main from './Main';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollStyle />
                <Main />
            </React.Fragment>
        );
    }
}
