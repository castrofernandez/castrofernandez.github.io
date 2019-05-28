import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeScore } from '../../actions';
import Tetris from './Tetris.component';

const mapStateToProps = function(state) {
    return {
        score: state.score
    };
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators(
        {
            changeScore
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetris);
