import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import languageFilter from './language';
import scoreFilter from './score';
import levelFilter from './level';
import sectionFilter from './section';
import puzzleFilter from './puzzle';
import deviceFilter from './device';

const reducers = (state = {}, action) => {
    return {
        language: languageFilter(state.language, action),
        score: scoreFilter(state.score, action),
        level: levelFilter(state.level, action),
        section: sectionFilter(state.section, action),
        puzzle: puzzleFilter(state.puzzle, action),
        device: deviceFilter(state.device, action)
    };
};

export const store = createStore(reducers, applyMiddleware(thunk));
