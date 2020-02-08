import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLanguage } from '../actions';

export default function(component) {
    const mapStateToProps = function(state) {
        return {
            language: state.language
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
