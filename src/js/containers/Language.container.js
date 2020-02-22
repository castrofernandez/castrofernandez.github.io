import containme from 'containme';
import { changeLanguage } from '../actions';

export default (component) => containme({
    component,
    actions: {
        changeLanguage
    },
    mapStateToProps: (state) => ({
        language: state.language,
        device: state.device
    })
});
