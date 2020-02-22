import React from 'react';
import Reactdom from 'react-dom';
import App from './components/App.jsx';
import sizeme from 'sizeme';
import querystringme from 'querystringme';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import { LANGUAGE_LIST } from './components/Header/LanguageSelector';

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

querystringme.load({
    localStorage: true,
    defaultValues: {
        language: {
            default: LANGUAGE_LIST[0],
            validator: v => LANGUAGE_LIST.includes(v)
        }
    }
});

Reactdom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
