import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeScore, changeLevel } from '../../actions';
import Tetris from './Tetris.component';

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators(
        {
            changeScore,
            changeLevel
        },
        dispatch
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Tetris);
