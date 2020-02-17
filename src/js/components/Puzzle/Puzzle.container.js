import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Puzzle from './Puzzle.component';
import { changePuzzle } from '../../actions';

const mapStateToProps = function(state) {
    return {
        section: state.section
    };
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators(
        {
            changePuzzle
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Puzzle);
