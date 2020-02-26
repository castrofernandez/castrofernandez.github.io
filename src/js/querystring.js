import querystringme from 'querystringme';
import { LANGUAGE_LIST } from './components/Header/LanguageSelector';

querystringme.load({
    localStorage: true,
    defaultValues: {
        language: {
            default: LANGUAGE_LIST[0],
            validator: (v) => LANGUAGE_LIST.includes(v)
        }
    }
});

export default () => {};
