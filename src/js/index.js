import React from 'react';
import Reactdom from 'react-dom';
import App from './components/App.jsx';
import sizeme from 'sizeme';

sizeme.load({
    sizes: [
        {
            type: 'mobile',
            maxWidth: 767
        },
        {
            type: 'tablet',
            maxWidth: 1024
        },
        {
            type: 'small_desktop',
            maxWidth: 1200
        }
    ]
});

//= require jquery
//= require lib/scrolledIntoView

// require('./ismobile');
// require('./scroll');
//= require _language
// require('./mobile_menu');
//= require _header
//= require _clock
//= require _animation_typing
//= require _animations
//= require _tetris
//= require _puzzle
//= require _projects

import { Provider } from 'react-redux';
import { store } from './reducers/index';

Reactdom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
