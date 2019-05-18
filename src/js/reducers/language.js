import querystringme from 'querystringme';

import CONSTANTS from '../actions/constants';

const getInitialState = () => querystringme.getParameter('language');

const languageFilter = (state = getInitialState(), action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LANGUAGE:
            querystringme.updateParameters({
                language: action.language
            });
            return action.language;
        default:
            return state;
    }
};

export default languageFilter;
