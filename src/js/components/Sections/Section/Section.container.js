import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Section from './Section.component';
import { changeSection } from '../../../actions';

const mapStateToProps = function(state) {
    return {
        section: state.section
    };
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators(
        {
            changeSection
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section);
