import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage } from '../actions';
// import Texts from '../utils/Texts';

export default function(component) {
    const mapStateToProps = function(state) {
        return {
            language: state.language
            // translate: key => Texts.getTranslationHTML(state.language, key)
        };
    };

    const mapDispatchToProps = function(dispatch) {
        return bindActionCreators(
            {
                changeLanguage
            },
            dispatch
        );
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);
}
