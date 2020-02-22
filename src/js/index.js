import React from 'react';
import Reactdom from 'react-dom';
import App from './components/App.jsx';
import sizeme from 'sizeme';
import { Provider } from 'react-redux';
import { store } from './reducers/index';

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

Reactdom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
