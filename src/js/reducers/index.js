import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import QueryString from '../querystring';
import languageFilter from './language';
import scoreFilter from './score';

QueryString.load();

const reducers = (state = {}, action) => {
    return {
        language: languageFilter(state.language, action),
        score: scoreFilter(state.score, action)
    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
