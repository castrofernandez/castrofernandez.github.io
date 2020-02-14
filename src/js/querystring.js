import querystringme from 'querystringme';

import { LANGUAGE_LIST } from './components/LanguageSelector/LanguageSelector';

const load = () => {
    querystringme.load({
        localStorage: true,
        defaultValues: {
            language: {
                default: LANGUAGE_LIST[0],
                validator: v => LANGUAGE_LIST.includes(v)
            }
        }
    });
};

export default {
    load
};
