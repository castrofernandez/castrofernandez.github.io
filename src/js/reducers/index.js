import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import QueryString from '../querystring';
import languageFilter from './language';

QueryString.load();

const reducers = (state = {}, action) => {
    return {
        language: languageFilter(state.language, action)
    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
